const { Schema, model } = require("mongoose");
const { Distillery } = require("./distillery");

const whiskeySchema = new Schema({
  whiskeyName: {
    type: String,
    trim: true,
  },
  whiskeyDistillery: {
    type: Schema.Types.ObjectId,
    ref: "Distillery",
  },
  whiskeyAge: {
    type: Number,
  },
});

const Whiskey = model("Whiskey", whiskeySchema);

module.exports = Whiskey;
