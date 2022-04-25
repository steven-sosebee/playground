const { gql } = require("apollo-server-express");

const typeDefs = gql`
  input SocialInput {
    socialName: String!
    socialLink: String!
    socialIcon: String
  }
  input MenuInput {
    menuItem: String
    menuLink: String
    menuIcon: String
    menuAuth: String
  }

  type User {
    _id: ID
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
    _id: ID
    recipeName: String
    ingredients: [Ingredient]
    instructions: [Instruction]
  }
  type Social {
    _id: ID
    socialName: String!
    socialLink: String!
    socialIcon: String
  }
  type newRecipe {
    recipeName: String
  }
  type Menu {
    _id: ID
    menuItem: String
    menuLink: String
    menuIcon: String
    menuAuth: String
  }
  type Workout {
    _id: ID
    workoutTime: String
    notes: String
    exercises: [Exercise]
  }
  type Exercise {
    exerciseName: String
    exerciseType: String
    exerciseMuscle: String
  }
  type Project {
    _id: ID
    projectName: String
    projectTechnologies: [String]
    projectURL: String
  }

  type Skill {
    Name: String
    Description: String
    Type: String
    Mastery: String
  }

  type Query {
    query: User
    recipes: [Recipe]
    socialLinks: [Social]
    getMenu: [Menu]
    workouts: [Workout]
  }
  type Mutation {
    addWorkout: Workout
    addMenuItem(menuItem: MenuInput): Menu
    addSocial(newSocial: SocialInput): Social
    deleteSocial(socialId: ID!): Social
    addRecipe(recipeName: String!): Recipe
    deleteRecipe(recipeId: ID!): Recipe
    addIngredient(recipe: String, quantity: Int, ingredient: String): Ingredient
    addInstruction(recipe: String!, instruction: String): Instruction
    addProject(
      projectName: String
      projectTechnologies: [String]
      projectURL: String
    ): Project
  }
`;

module.exports = typeDefs;
