const { Schema, model } = require("mongoose");

const instructionSchema = new Schema({
  instruction: {
    type: String,
    trim: true,
  },
});

const Instruction = model("Instruction", instructionSchema);

module.exports = Instruction;
