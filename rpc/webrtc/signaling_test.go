package rpcwebrtc_test

import (
	"context"
	"fmt"
	"net"
	"testing"

	"github.com/edaniels/golog"
	"github.com/pion/webrtc/v3"
	"go.viam.com/test"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"

	echopb "go.viam.com/utils/proto/rpc/examples/echo/v1"
	webrtcpb "go.viam.com/utils/proto/rpc/webrtc/v1"
	"go.viam.com/utils/rpc"
	echoserver "go.viam.com/utils/rpc/examples/echo/server"
	rpcwebrtc "go.viam.com/utils/rpc/webrtc"
	"go.viam.com/utils/testutils"
)

func TestSignaling(t *testing.T) {
	testutils.SkipUnlessInternet(t)
	logger := golog.NewTestLogger(t)

	queue := rpcwebrtc.NewMemoryCallQueue()
	defer queue.Close()
	signalingServer := rpcwebrtc.NewSignalingServer(queue, nil)

	grpcListener, err := net.Listen("tcp", "localhost:0")
	test.That(t, err, test.ShouldBeNil)
	grpcServer := grpc.NewServer()
	grpcServer.RegisterService(&webrtcpb.SignalingService_ServiceDesc, signalingServer)

	serveDone := make(chan error)
	go func() {
		serveDone <- grpcServer.Serve(grpcListener)
	}()

	webrtcServer := rpcwebrtc.NewServer(logger)
	webrtcServer.RegisterService(&echopb.EchoService_ServiceDesc, &echoserver.Server{})

	answerer := rpcwebrtc.NewSignalingAnswerer(grpcListener.Addr().String(), "yeehaw", webrtcServer, true, webrtc.Configuration{}, logger)
	test.That(t, answerer.Start(), test.ShouldBeNil)

	cc, err := grpc.Dial(grpcListener.Addr().String(), grpc.WithBlock(), grpc.WithInsecure())
	test.That(t, err, test.ShouldBeNil)
	defer func() {
		test.That(t, cc.Close(), test.ShouldBeNil)
	}()
	signalClient := webrtcpb.NewSignalingServiceClient(cc)

	callClient, err := signalClient.Call(context.Background(), &webrtcpb.CallRequest{})
	test.That(t, err, test.ShouldBeNil)
	_, err = callClient.Recv()
	test.That(t, err, test.ShouldNotBeNil)
	test.That(t, err.Error(), test.ShouldContainSubstring, "expected rpc-host")

	md := metadata.New(map[string]string{"rpc-host": "yeehaw"})
	callCtx := metadata.NewOutgoingContext(context.Background(), md)

	callClient, err = signalClient.Call(callCtx, &webrtcpb.CallRequest{})
	test.That(t, err, test.ShouldBeNil)
	_, err = callClient.Recv()
	test.That(t, err, test.ShouldNotBeNil)
	test.That(t, err.Error(), test.ShouldContainSubstring, "unexpected")

	callClient, err = signalClient.Call(callCtx, &webrtcpb.CallRequest{Sdp: "thing"})
	test.That(t, err, test.ShouldBeNil)
	_, err = callClient.Recv()
	test.That(t, err, test.ShouldNotBeNil)
	test.That(t, err.Error(), test.ShouldContainSubstring, "illegal")

	for _, tc := range []bool{true, false} {
		t.Run(fmt.Sprintf("with trickle disabled %t", tc), func(t *testing.T) {
			ch, err := rpcwebrtc.Dial(
				context.Background(),
				rpc.HostURI(grpcListener.Addr().String(), "yeehaw"),
				rpcwebrtc.Options{
					Insecure:          true,
					DisableTrickleICE: tc,
				},
				logger,
			)
			test.That(t, err, test.ShouldBeNil)
			defer func() {
				test.That(t, ch.Close(), test.ShouldBeNil)
			}()

			echoClient := echopb.NewEchoServiceClient(ch)
			resp, err := echoClient.Echo(context.Background(), &echopb.EchoRequest{Message: "hello"})
			test.That(t, err, test.ShouldBeNil)
			test.That(t, resp.Message, test.ShouldEqual, "hello")
		})
	}

	webrtcServer.Stop()
	answerer.Stop()
	grpcServer.Stop()
	test.That(t, <-serveDone, test.ShouldBeNil)
}
