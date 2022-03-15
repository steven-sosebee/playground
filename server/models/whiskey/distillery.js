const { Schema, model } = require("mongoose");

const distillerySchema = new Schema({
  distilleryName: {
    type: String,
    trim: true,
  },
  distilleryLocation: {
    type: String,
  },
});

const Distillery = model("Distillery", distillerySchema);

module.exports = Distillery;
