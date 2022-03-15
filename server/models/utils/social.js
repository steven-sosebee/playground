const { Schema, model } = require("mongoose");

const socialSchema = new Schema({
  socialName: {
    type: String,
    trim: true,
  },

  socialLink: {
    type: String,
    trim: true,
  },
  socialIcon: {
    type: String,
    trim: true,
  },
});

const Social = model("Social", socialSchema);

module.exports = Social;
