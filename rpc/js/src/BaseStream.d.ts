import { grpc } from "@improbable-eng/grpc-web";
import { PacketMessage, Stream } from "proto/rpc/webrtc/v1/grpc_pb";
export declare class BaseStream {
    protected readonly stream: Stream;
    private readonly onDone;
    protected readonly opts: grpc.TransportOptions;
    private closed;
    private readonly packetBuf;
    private packetBufSize;
    private err?;
    constructor(stream: Stream, onDone: (id: number) => void, opts: grpc.TransportOptions);
    cancel(): void;
    protected closeWithRecvError(err?: Error): void;
    protected processPacketMessage(msg: PacketMessage): Uint8Array | undefined;
}
