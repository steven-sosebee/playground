const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");
// const workoutApp = require("./config/workout");

// console.log(db);
const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "../client/build/index.html"));
    } catch (error) {
      console.log(error);
    }
  });
} else {
  app.use(express.static(path.join(__dirname, "../client/public")));

  app.get("*", (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "../client/public/index.html"));
    } catch (error) {
      console.log(error);
    }
  });
}
// const workoutApp = db.useDb("workout-app");
// const cookbookApp = db.useDb("cookbook-app");
db.once("open", () => {
  // console.log("starting db...");
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    // console.log(`connected to Workout App...${workoutApp.name}`);
    // console.log(`connected to Cookbook App...${cookbookApp.name}`);
  });
});
