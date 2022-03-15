const { Schema, model } = require("mongoose");

const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    trim: true,
  },
  exerciseType: {
    type: String,
    trim: true,
  },
  exerciseMuscle: {
    type: String,
    trim: true,
  },
});

module.exports = exerciseSchema;
