const { Schema, model } = require("mongoose");

const checkInSchema = new Schema({
  checkInWhiskey: {
    type: String,
    trim: true,
  },
});

const CheckIn = model("CheckIn", checkInSchema);

module.exports = CheckIn;
