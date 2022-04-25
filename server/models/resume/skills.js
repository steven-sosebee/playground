const { Schema } = require("mongoose");

const skillSchema = new Schema({
  skillName: {
    type: String,
    trim: true,
  },
  skillDescription: {
    type: String,
    trim: true,
  },
  skillType: {
    type: String,
    trim: true,
  },
  skillMastery: {
    type: String,
    trim: true,
  },
});

module.exports = { skillSchema };
