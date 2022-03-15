const {
  Workout,
  User,
  Recipe,
  Social,
  Ingredient,
  Menu,
} = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
// const Ingredient = require("../models/ingredient");
// const {User, Social}=require("../models/utils")  ;
// const {Recipe}=require("../models/cooking/recipe");

const resolvers = {
  Query: {
    workouts: async (parent) => {
      try {
        const workouts = await Workout.find();
        return workouts;
      } catch (err) {
        console.log(err);
      }
    },
    recipes: async (parent) => {
      try {
        const recipes = await Recipe.find();
        return recipes;
      } catch (err) {
        console.log(err);
      }
    },
    socialLinks: async (parent) => {
      try {
        const socials = await Social.find();
        return socials;
      } catch (err) {
        console.log(err);
      }
    },
    getMenu: async (parent) => {
      try {
        const menuItems = await Menu.find();
        return menuItems;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    addWorkout: async (parent) => {
      try {
        const newWorkout = await Workout.create({
          workoutTime,
        });
        return newWorkout;
      } catch (err) {
        console.log(err);
      }
    },
    addMenuItem: async (parent, menuItem) => {
      try {
        console.log(menuItem.menuItem);
        const newMenuItem = await Menu.create(menuItem.menuItem);
        return newMenuItem;
      } catch (err) {
        console.log("an error occured...");
      }
    },
    addSocial: async (parent, SocialInput) => {
      try {
        const test = SocialInput.newSocial;

        const newSocial = await Social.create({
          socialName: SocialInput.newSocial.socialName,
          socialLink: SocialInput.newSocial.socialLink,
          socialIcon: SocialInput.newSocial.socialIcon,
        });
        return newSocial;
      } catch (err) {
        console.log(err);
      }
    },
    deleteSocial: async (parent, { socialId }) => {
      try {
        const deleteSocial = await Social.findOneAndDelete({
          _id: socialId,
        });
        return deleteSocial;
      } catch (err) {
        console.log(err);
      }
    },
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
    deleteRecipe: async (parent, { recipeId }) => {
      try {
        console.log(recipeId);
        const deleteRecipe = await Recipe.findOneAndDelete({
          _id: recipeId,
        });
        return deleteRecipe;
      } catch (err) {
        console.log(err);
      }
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
