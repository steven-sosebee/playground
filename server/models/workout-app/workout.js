const { Schema, model } = require("mongoose");
const { exerciseSchema } = require("./exercise");

const workoutSchema = new Schema({
  workoutTime: {
    type: String,
    trim: true,
    default: `${Date.now()}`,
  },
  notes: {
    type: String,
  },
  exercices: { type: [exerciseSchema] },
});

module.exports = workoutSchema;
