const { createConnection, Schema, model } = require("mongoose");
const cookbookConn = createConnection("mongodb://localhost/cookbook");
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

const Recipe = cookbookConn.model("Recipe", recipeSchema);

module.exports = Recipe;
