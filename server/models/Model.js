const { Schema, model } = require("mongoose");

const modelSchema = new Schema({
  field: {
    type: String,
    trim: true,
  },
});

const Model = model("Model", modelSchema);

module.exports = Model;
