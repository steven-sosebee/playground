const { Schema, model } = require("mongoose");

const menuSchema = new Schema({
  menuItem: {
    type: String,
    trim: true,
  },
  menuLink: {
    type: String,
  },
  menuIcon: {
    type: String,
  },
  menuAuth: {
    type: String,
  },
});

const Menu = model("Menu", menuSchema);

module.exports = Menu;
