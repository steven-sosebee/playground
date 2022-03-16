const { Schema, model } = require("mongoose");
// const cookbookConn = createConnection("mongodb://localhost/cookbook");

const instructionSchema = new Schema({
  instruction: {
    type: String,
    trim: true,
  },
});

module.exports = instructionSchema;
