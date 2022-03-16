const { Schema, model } = require("mongoose");

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

module.exports = ingredientSchema;
