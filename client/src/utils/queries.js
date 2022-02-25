import { gql } from "@apollo/client";

export const QUERY_RECIPES = gql`
  query recipes {
    recipes {
      recipeName
      ingredients {
        quantity
        ingredient
      }
    }
  }
`;
