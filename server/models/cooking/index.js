const { model, createConnection } = require("mongoose");
const cookbookConn = createConnection(
  process.env.MONGODB_URI || "mongodb://127.0.0.1/cookbook"
);
const recipeSchema = require("./recipe");
const ingredientSchema = require("./ingredient");
const instructionSchema = require("./instruction");

const Recipe = cookbookConn.model("Recipe", recipeSchema);
const Ingredient = cookbookConn.model("Ingredient", ingredientSchema);
const Instruction = cookbookConn.model("Instruction", instructionSchema);
module.exports = { Recipe, Ingredient, Instruction };
