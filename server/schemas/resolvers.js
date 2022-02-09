const { Users, Movies, Ratings } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    query: async (input) => {
      return console.log("query");
    },
  },

  Mutation: {
    mutation: (input) => {
      return console.log("mutation");
    },
  },
};

module.exports = resolvers;
