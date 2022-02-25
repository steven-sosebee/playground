const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    phone: String
    company: String
  }
  type Instruction {
    instruction: String
  }
  type Ingredient {
    quantity: Int
    ingredient: String
  }
  type Recipe {
    recipeName: String
    ingredients: [Ingredient]
    instructions: [Instruction]
  }

  type newRecipe {
    recipeName: String
  }
  type Query {
    query: User
    recipes: [Recipe]
  }
  type Mutation {
    addRecipe(recipeName: String): Recipe
    addIngredient(recipe: String, quantity: Int, ingredient: String): Ingredient
    addInstruction(recipe: String!, instruction: String): Instruction
  }
`;

module.exports = typeDefs;
