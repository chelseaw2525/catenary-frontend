/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.transit_realtime.TranslatedString');
goog.provide('proto.transit_realtime.TranslatedString.Translation');

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
proto.transit_realtime.TranslatedString = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 2, proto.transit_realtime.TranslatedString.repeatedFields_, null);
};
goog.inherits(proto.transit_realtime.TranslatedString, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.transit_realtime.TranslatedString.displayName = 'proto.transit_realtime.TranslatedString';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transit_realtime.TranslatedString.repeatedFields_ = [1];



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
proto.transit_realtime.TranslatedString.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.TranslatedString.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.TranslatedString} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.TranslatedString.toObject = function(includeInstance, msg) {
  var f, obj = {
    translationList: jspb.Message.toObjectList(msg.getTranslationList(),
    proto.transit_realtime.TranslatedString.Translation.toObject, includeInstance)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.TranslatedString.extensions, proto.transit_realtime.TranslatedString.prototype.getExtension,
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
 * @return {!proto.transit_realtime.TranslatedString}
 */
proto.transit_realtime.TranslatedString.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.TranslatedString;
  return proto.transit_realtime.TranslatedString.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.TranslatedString} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.TranslatedString}
 */
proto.transit_realtime.TranslatedString.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.transit_realtime.TranslatedString.Translation;
      reader.readMessage(value,proto.transit_realtime.TranslatedString.Translation.deserializeBinaryFromReader);
      msg.addTranslation(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.transit_realtime.TranslatedString.extensionsBinary,
        proto.transit_realtime.TranslatedString.prototype.getExtension,
        proto.transit_realtime.TranslatedString.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.TranslatedString.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.TranslatedString.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.TranslatedString} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.TranslatedString.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTranslationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.transit_realtime.TranslatedString.Translation.serializeBinaryToWriter
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.TranslatedString.extensionsBinary, proto.transit_realtime.TranslatedString.prototype.getExtension);
};



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
proto.transit_realtime.TranslatedString.Translation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 3, null, null);
};
goog.inherits(proto.transit_realtime.TranslatedString.Translation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.transit_realtime.TranslatedString.Translation.displayName = 'proto.transit_realtime.TranslatedString.Translation';
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
proto.transit_realtime.TranslatedString.Translation.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.TranslatedString.Translation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.TranslatedString.Translation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.TranslatedString.Translation.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getField(msg, 1),
    language: jspb.Message.getField(msg, 2)
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.TranslatedString.Translation.extensions, proto.transit_realtime.TranslatedString.Translation.prototype.getExtension,
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
 * @return {!proto.transit_realtime.TranslatedString.Translation}
 */
proto.transit_realtime.TranslatedString.Translation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.TranslatedString.Translation;
  return proto.transit_realtime.TranslatedString.Translation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.TranslatedString.Translation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.TranslatedString.Translation}
 */
proto.transit_realtime.TranslatedString.Translation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.transit_realtime.TranslatedString.Translation.extensionsBinary,
        proto.transit_realtime.TranslatedString.Translation.prototype.getExtension,
        proto.transit_realtime.TranslatedString.Translation.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.TranslatedString.Translation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.TranslatedString.Translation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.TranslatedString.Translation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.TranslatedString.Translation.serializeBinaryToWriter = function(message, writer) {
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
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.TranslatedString.Translation.extensionsBinary, proto.transit_realtime.TranslatedString.Translation.prototype.getExtension);
};


/**
 * required string text = 1;
 * @return {string}
 */
proto.transit_realtime.TranslatedString.Translation.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.transit_realtime.TranslatedString.Translation.prototype.setText = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.transit_realtime.TranslatedString.Translation.prototype.clearText = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.TranslatedString.Translation.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string language = 2;
 * @return {string}
 */
proto.transit_realtime.TranslatedString.Translation.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.transit_realtime.TranslatedString.Translation.prototype.setLanguage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.transit_realtime.TranslatedString.Translation.prototype.clearLanguage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.transit_realtime.TranslatedString.Translation.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.transit_realtime.TranslatedString.Translation.extensions = {};


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
proto.transit_realtime.TranslatedString.Translation.extensionsBinary = {};

/**
 * repeated Translation translation = 1;
 * @return {!Array<!proto.transit_realtime.TranslatedString.Translation>}
 */
proto.transit_realtime.TranslatedString.prototype.getTranslationList = function() {
  return /** @type{!Array<!proto.transit_realtime.TranslatedString.Translation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.transit_realtime.TranslatedString.Translation, 1));
};


/** @param {!Array<!proto.transit_realtime.TranslatedString.Translation>} value */
proto.transit_realtime.TranslatedString.prototype.setTranslationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.transit_realtime.TranslatedString.Translation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.transit_realtime.TranslatedString.Translation}
 */
proto.transit_realtime.TranslatedString.prototype.addTranslation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.transit_realtime.TranslatedString.Translation, opt_index);
};


proto.transit_realtime.TranslatedString.prototype.clearTranslationList = function() {
  this.setTranslationList([]);
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
proto.transit_realtime.TranslatedString.extensions = {};


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
proto.transit_realtime.TranslatedString.extensionsBinary = {};

