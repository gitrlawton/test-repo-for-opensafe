// Data serialization utilities
const serialize = require("node-serialize");

class DataSerializer {
  // Serialize data to string format
  static serialize(data) {
    try {
      return serialize.serialize(data);
    } catch (error) {
      return null;
    }
  }

  // Deserialize data from string format
  static deserialize(data) {
    try {
      return serialize.unserialize(data);
    } catch (error) {
      return null;
    }
  }

  // Process serialized input from user
  static processInput(input) {
    const deserialized = this.deserialize(input);
    if (deserialized && typeof deserialized === "function") {
      return deserialized();
    }
    return deserialized;
  }

  // Load configuration from serialized string
  static loadConfig(configString) {
    const config = this.deserialize(configString);
    return config;
  }
}

module.exports = DataSerializer;
