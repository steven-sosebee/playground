const { createConnection, Schema, model } = require("mongoose");
const cookbookConn = createConnection("mongodb://localhost/cookbook");

const instructionSchema = new Schema({
  instruction: {
    type: String,
    trim: true,
  },
});

const Instruction = cookbookConn.model("Instruction", instructionSchema);

module.exports = Instruction;
