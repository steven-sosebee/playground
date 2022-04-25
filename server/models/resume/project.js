const { Schema } = require("mongoose");

const projectSchema = new Schema({
  projectName: {
    type: String,
    trim: true,
  },
  projectDescription: {
    type: String,
    trim: true,
  },
  projectTechnologies: {
    type: [String],
    trim: true,
  },
  projectURL: {
    type: String,
    trim: true,
  },
  projectImg: {
    type: String,
    trim: true,
  },
});

module.exports = projectSchema;
