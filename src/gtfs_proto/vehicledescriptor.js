/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.transit_realtime.VehicleDescriptor');
goog.provide('proto.transit_realtime.VehicleDescriptor.WheelchairAccessible');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');


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
proto.transit_realtime.VehicleDescriptor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 5, null, null);
};
goog.inherits(proto.transit_realtime.VehicleDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.transit_realtime.VehicleDescriptor.displayName = 'proto.transit_realtime.VehicleDescriptor';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transit_realtime.VehicleDescriptor.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.VehicleDescriptor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.VehicleDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.VehicleDescriptor.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getField(msg, 1),
    label: jspb.Message.getField(msg, 2),
    licensePlate: jspb.Message.getField(msg, 3),
    wheelchairAccessible: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.VehicleDescriptor.extensions, proto.transit_realtime.VehicleDescriptor.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transit_realtime.VehicleDescriptor}
 */
proto.transit_realtime.VehicleDescriptor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.VehicleDescriptor;
  return proto.transit_realtime.VehicleDescriptor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.VehicleDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.VehicleDescriptor}
 */
proto.transit_realtime.VehicleDescriptor.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setLabel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLicensePlate(value);
      break;
    case 4:
      var value = /** @type {!proto.transit_realtime.VehicleDescriptor.WheelchairAccessible} */ (reader.readEnum());
      msg.setWheelchairAccessible(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.transit_realtime.VehicleDescriptor.extensionsBinary,
        proto.transit_realtime.VehicleDescriptor.prototype.getExtension,
        proto.transit_realtime.VehicleDescriptor.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.VehicleDescriptor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.VehicleDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.VehicleDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.VehicleDescriptor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {!proto.transit_realtime.VehicleDescriptor.WheelchairAccessible} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.VehicleDescriptor.extensionsBinary, proto.transit_realtime.VehicleDescriptor.prototype.getExtension);
};


/**
 * @enum {number}
 */
proto.transit_realtime.VehicleDescriptor.WheelchairAccessible = {
  NO_VALUE: 0,
  UNKNOWN: 1,
  WHEELCHAIR_ACCESSIBLE: 2,
  WHEELCHAIR_INACCESSIBLE: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.transit_realtime.VehicleDescriptor.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.transit_realtime.VehicleDescriptor.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.transit_realtime.VehicleDescriptor.prototype.clearId = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.VehicleDescriptor.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string label = 2;
 * @return {string}
 */
proto.transit_realtime.VehicleDescriptor.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.transit_realtime.VehicleDescriptor.prototype.setLabel = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.transit_realtime.VehicleDescriptor.prototype.clearLabel = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.VehicleDescriptor.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string license_plate = 3;
 * @return {string}
 */
proto.transit_realtime.VehicleDescriptor.prototype.getLicensePlate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.transit_realtime.VehicleDescriptor.prototype.setLicensePlate = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.transit_realtime.VehicleDescriptor.prototype.clearLicensePlate = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.VehicleDescriptor.prototype.hasLicensePlate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WheelchairAccessible wheelchair_accessible = 4;
 * @return {!proto.transit_realtime.VehicleDescriptor.WheelchairAccessible}
 */
proto.transit_realtime.VehicleDescriptor.prototype.getWheelchairAccessible = function() {
  return /** @type {!proto.transit_realtime.VehicleDescriptor.WheelchairAccessible} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {!proto.transit_realtime.VehicleDescriptor.WheelchairAccessible} value */
proto.transit_realtime.VehicleDescriptor.prototype.setWheelchairAccessible = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.transit_realtime.VehicleDescriptor.prototype.clearWheelchairAccessible = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.VehicleDescriptor.prototype.hasWheelchairAccessible = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.transit_realtime.VehicleDescriptor.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.transit_realtime.VehicleDescriptor.extensionsBinary = {};

