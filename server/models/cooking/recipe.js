const { createConnection, Schema, model } = require("mongoose");

const { Instruction } = require("./instruction");
const { Ingredient } = require("./ingredient");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  ingredients: { type: [Ingredient] },
  instructions: { type: [Instruction] },
});

module.exports = recipeSchema;
