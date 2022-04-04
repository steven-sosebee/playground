import { gql } from "@apollo/client";

export const QUERY_MAIN_MENU = gql`
  query getMenu {
    getMenu {
      _id
      menuItem
      menuLink
      menuIcon
      menuAuth
    }
  }
`;
