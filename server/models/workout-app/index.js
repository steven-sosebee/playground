const workoutSchema = require("./workout");
const exerciseSchema = require("./exercise");
const workoutApp = require("../../config/workout");

const Workout = workoutApp.model("Workout", workoutSchema);
const Exercise = workoutApp.model("Exercise", exerciseSchema);

module.exports = { Workout };
