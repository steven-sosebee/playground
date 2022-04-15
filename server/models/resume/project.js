const { Schema } = require("mongoose");

const projectSchema = new Schema({
  projectName: {
    type: String,
    trim: true,
  },
  projectType: {
    type: String,
    trim: true,
  },
});

module.export = {};
