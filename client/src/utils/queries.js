import { gql } from "@apollo/client";

export const QUERY_RECIPES = gql`
  query recipes {
    recipes {
      recipeName
      _id
      ingredients {
        quantity
        ingredient
      }
    }
  }
`;
export const ADD_RECIPE = gql`
  mutation addRecipe($recipeName: String!) {
    addRecipe(recipeName: $recipeName) {
      recipeName
      _id
    }
  }
`;

export const DELETE_RECIPE = gql`
  mutation deleteRecipe($recipeId: ID!) {
    deleteRecipe(recipeId: $recipeId) {
      recipeName
      _id
    }
  }
`;
