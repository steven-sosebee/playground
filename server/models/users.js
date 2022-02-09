const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
// const SALT_WORK_FACTOR = 13;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  ratings: [
    {
      imdbID: {
        type: String,
        required: true,
        trim: true,
      },
      score: {
        type: Number,
        min: 0,
        max: 80,
      },
      image: {
        type: String,
        trim: true,
      },
      title: {
        type: String,
        trim: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.checkPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
