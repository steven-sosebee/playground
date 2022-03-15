import { gql } from "@apollo/client";

export const QUERY_SOCIAL = gql`
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

export const ADD_SOCIAL = gql`
  mutation addSocial($newSocial: SocialInput!) {
    addSocial(newSocial: $newSocial) {
      _id
      socialName
      socialLink
      socialIcon
    }
  }
`;

export const DELETE_SOCIAL = gql`
  mutation deleteSocial($socialID: ID!) {
    deleteSocial(socialId: $socialID) {
      socialName
      _id
    }
  }
`;
