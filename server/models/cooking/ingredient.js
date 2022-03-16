const { createConnection, Schema, model } = require("mongoose");
// const cookbookConn = createConnection("mongodb://localhost/cookbook");

const ingredientSchema = new Schema({
  ingredient: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    trim: true,
  },
});

const Ingredient = model("Ingredient", ingredientSchema);

module.exports = Ingredient;
