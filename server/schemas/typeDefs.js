const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Model {
    name: String
  }

  type Query {
    query: Model
  }

  type Mutation {
    mutation(field: String): Model
  }
`;

module.exports = typeDefs;
