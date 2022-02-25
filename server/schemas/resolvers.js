const { User, Recipe } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const Ingredient = require("../models/ingredient");

const resolvers = {
  Query: {
    recipes: async (parent) => {
      try {
        const recipes = await Recipe.find();
        return recipes;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addRecipe: async (parent, { recipeName }) => {
      // console.log({ recipeName, ingredients, instructions });
      // console.log(ingredients);
      // console.log(instructions);
      const newRecipe = await Recipe.create({
        recipeName,
      });
      console.log(newRecipe);
      return newRecipe;
    },

    addIngredient: async (parent, { recipe, ingredient, quantity }) => {
      try {
        console.log({ recipe, ingredient, quantity });
        const newIngredient = await Recipe.updateOne(
          { recipeName: recipe },
          { $push: { ingredients: { ingredient, quantity } } }
        );
        return newIngredient;
      } catch (err) {
        console.log(err);
      }
    },

    addInstruction: async (parent, { recipe, instruction }) => {
      try {
        console.log(parent);
        const newInstruction = await Recipe.updateOne(
          { recipeName: recipe },
          { $push: { instructions: { instruction } } }
        );
        return newInstruction;
      } catch (err) {
        console.log(err);
      }
    },
  },
};

module.exports = resolvers;
