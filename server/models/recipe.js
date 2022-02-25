const { Schema, model } = require("mongoose");
const { Instruction } = require("./instruction");
const { Ingredient } = require("./ingredient");

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    trim: true,
  },

  ingredients: { type: [Ingredient] },
  instructions: { type: [Instruction] },
});

const Recipe = model("Recipe", recipeSchema);

module.exports = Recipe;
