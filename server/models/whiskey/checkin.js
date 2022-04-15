const { Schema, model } = require("mongoose");

const checkInSchema = new Schema({
  checkInWhiskey: {
    type: String,
    trim: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const CheckIn = model("CheckIn", checkInSchema);

module.exports = CheckIn;
