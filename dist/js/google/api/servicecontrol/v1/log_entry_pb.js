// source: google/api/servicecontrol/v1/log_entry.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_servicecontrol_v1_http_request_pb = require('../../../../google/api/servicecontrol/v1/http_request_pb.js');
goog.object.extend(proto, google_api_servicecontrol_v1_http_request_pb);
var google_logging_type_log_severity_pb = require('../../../../google/logging/type/log_severity_pb.js');
goog.object.extend(proto, google_logging_type_log_severity_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.google.api.servicecontrol.v1.LogEntry', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.LogEntry.PayloadCase', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.LogEntryOperation', null, global);
goog.exportSymbol('proto.google.api.servicecontrol.v1.LogEntrySourceLocation', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.servicecontrol.v1.LogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_);
};
goog.inherits(proto.google.api.servicecontrol.v1.LogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.LogEntry.displayName = 'proto.google.api.servicecontrol.v1.LogEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.servicecontrol.v1.LogEntryOperation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.LogEntryOperation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.LogEntryOperation.displayName = 'proto.google.api.servicecontrol.v1.LogEntryOperation';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.servicecontrol.v1.LogEntrySourceLocation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.servicecontrol.v1.LogEntrySourceLocation.displayName = 'proto.google.api.servicecontrol.v1.LogEntrySourceLocation';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_ = [[2,3,6]];

/**
 * @enum {number}
 */
proto.google.api.servicecontrol.v1.LogEntry.PayloadCase = {
  PAYLOAD_NOT_SET: 0,
  PROTO_PAYLOAD: 2,
  TEXT_PAYLOAD: 3,
  STRUCT_PAYLOAD: 6
};

/**
 * @return {proto.google.api.servicecontrol.v1.LogEntry.PayloadCase}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getPayloadCase = function() {
  return /** @type {proto.google.api.servicecontrol.v1.LogEntry.PayloadCase} */(jspb.Message.computeOneofCase(this, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.LogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    severity: jspb.Message.getFieldWithDefault(msg, 12, 0),
    httpRequest: (f = msg.getHttpRequest()) && google_api_servicecontrol_v1_http_request_pb.HttpRequest.toObject(includeInstance, f),
    trace: jspb.Message.getFieldWithDefault(msg, 15, ""),
    insertId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
    protoPayload: (f = msg.getProtoPayload()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    textPayload: jspb.Message.getFieldWithDefault(msg, 3, ""),
    structPayload: (f = msg.getStructPayload()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    operation: (f = msg.getOperation()) && proto.google.api.servicecontrol.v1.LogEntryOperation.toObject(includeInstance, f),
    sourceLocation: (f = msg.getSourceLocation()) && proto.google.api.servicecontrol.v1.LogEntrySourceLocation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry}
 */
proto.google.api.servicecontrol.v1.LogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.LogEntry;
  return proto.google.api.servicecontrol.v1.LogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry}
 */
proto.google.api.servicecontrol.v1.LogEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 12:
      var value = /** @type {!proto.google.logging.type.LogSeverity} */ (reader.readEnum());
      msg.setSeverity(value);
      break;
    case 14:
      var value = new google_api_servicecontrol_v1_http_request_pb.HttpRequest;
      reader.readMessage(value,google_api_servicecontrol_v1_http_request_pb.HttpRequest.deserializeBinaryFromReader);
      msg.setHttpRequest(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsertId(value);
      break;
    case 13:
      var value = msg.getLabelsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setProtoPayload(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextPayload(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setStructPayload(value);
      break;
    case 16:
      var value = new proto.google.api.servicecontrol.v1.LogEntryOperation;
      reader.readMessage(value,proto.google.api.servicecontrol.v1.LogEntryOperation.deserializeBinaryFromReader);
      msg.setOperation(value);
      break;
    case 17:
      var value = new proto.google.api.servicecontrol.v1.LogEntrySourceLocation;
      reader.readMessage(value,proto.google.api.servicecontrol.v1.LogEntrySourceLocation.deserializeBinaryFromReader);
      msg.setSourceLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.LogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.LogEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSeverity();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getHttpRequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_api_servicecontrol_v1_http_request_pb.HttpRequest.serializeBinaryToWriter
    );
  }
  f = message.getTrace();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getInsertId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getProtoPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStructPayload();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOperation();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.google.api.servicecontrol.v1.LogEntryOperation.serializeBinaryToWriter
    );
  }
  f = message.getSourceLocation();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.google.api.servicecontrol.v1.LogEntrySourceLocation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.logging.type.LogSeverity severity = 12;
 * @return {!proto.google.logging.type.LogSeverity}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getSeverity = function() {
  return /** @type {!proto.google.logging.type.LogSeverity} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.google.logging.type.LogSeverity} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setSeverity = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional HttpRequest http_request = 14;
 * @return {?proto.google.api.servicecontrol.v1.HttpRequest}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getHttpRequest = function() {
  return /** @type{?proto.google.api.servicecontrol.v1.HttpRequest} */ (
    jspb.Message.getWrapperField(this, google_api_servicecontrol_v1_http_request_pb.HttpRequest, 14));
};


/**
 * @param {?proto.google.api.servicecontrol.v1.HttpRequest|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setHttpRequest = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearHttpRequest = function() {
  return this.setHttpRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasHttpRequest = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string trace = 15;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getTrace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setTrace = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string insert_id = 4;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getInsertId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setInsertId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> labels = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getLabelsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearLabelsMap = function() {
  this.getLabelsMap().clear();
  return this;};


/**
 * optional google.protobuf.Any proto_payload = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getProtoPayload = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setProtoPayload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearProtoPayload = function() {
  return this.setProtoPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasProtoPayload = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string text_payload = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getTextPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.setTextPayload = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearTextPayload = function() {
  return jspb.Message.setOneofField(this, 3, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasTextPayload = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct struct_payload = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getStructPayload = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setStructPayload = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.google.api.servicecontrol.v1.LogEntry.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearStructPayload = function() {
  return this.setStructPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasStructPayload = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LogEntryOperation operation = 16;
 * @return {?proto.google.api.servicecontrol.v1.LogEntryOperation}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getOperation = function() {
  return /** @type{?proto.google.api.servicecontrol.v1.LogEntryOperation} */ (
    jspb.Message.getWrapperField(this, proto.google.api.servicecontrol.v1.LogEntryOperation, 16));
};


/**
 * @param {?proto.google.api.servicecontrol.v1.LogEntryOperation|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setOperation = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearOperation = function() {
  return this.setOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasOperation = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional LogEntrySourceLocation source_location = 17;
 * @return {?proto.google.api.servicecontrol.v1.LogEntrySourceLocation}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.getSourceLocation = function() {
  return /** @type{?proto.google.api.servicecontrol.v1.LogEntrySourceLocation} */ (
    jspb.Message.getWrapperField(this, proto.google.api.servicecontrol.v1.LogEntrySourceLocation, 17));
};


/**
 * @param {?proto.google.api.servicecontrol.v1.LogEntrySourceLocation|undefined} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
*/
proto.google.api.servicecontrol.v1.LogEntry.prototype.setSourceLocation = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.api.servicecontrol.v1.LogEntry} returns this
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.clearSourceLocation = function() {
  return this.setSourceLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntry.prototype.hasSourceLocation = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.LogEntryOperation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.LogEntryOperation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    producer: jspb.Message.getFieldWithDefault(msg, 2, ""),
    first: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    last: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.LogEntryOperation;
  return proto.google.api.servicecontrol.v1.LogEntryOperation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.LogEntryOperation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProducer(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFirst(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLast(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.LogEntryOperation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.LogEntryOperation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProducer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirst();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLast();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string producer = 2;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.getProducer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.setProducer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool first = 3;
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.getFirst = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.setFirst = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool last = 4;
 * @return {boolean}
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.getLast = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntryOperation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntryOperation.prototype.setLast = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.servicecontrol.v1.LogEntrySourceLocation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: jspb.Message.getFieldWithDefault(msg, 1, ""),
    line: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pb_function: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.servicecontrol.v1.LogEntrySourceLocation;
  return proto.google.api.servicecontrol.v1.LogEntrySourceLocation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLine(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFunction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.servicecontrol.v1.LogEntrySourceLocation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLine();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getFunction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string file = 1;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 line = 2;
 * @return {number}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.getLine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.setLine = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string function = 3;
 * @return {string}
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.getFunction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.servicecontrol.v1.LogEntrySourceLocation} returns this
 */
proto.google.api.servicecontrol.v1.LogEntrySourceLocation.prototype.setFunction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.google.api.servicecontrol.v1);
