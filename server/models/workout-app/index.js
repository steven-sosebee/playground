const { model, createConnection } = require("mongoose");
const workoutSchema = require("./workout");
const exerciseSchema = require("./exercise");
// const { createConnection } = require("mongoose");

const workoutApp = createConnection(
  process.env.WORKOUTDB || "mongodb://127.0.0.1/workout-app"
);

// const workoutApp = require("../../config/workout");

const Workout = workoutApp.model("Workout", workoutSchema);
const Exercise = workoutApp.model("Exercise", exerciseSchema);

module.exports = { Workout, Exercise };
