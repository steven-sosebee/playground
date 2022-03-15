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
  company: {
    type: String,
    trime: true,
  },
  phone: {
    type: String,
    trime: true,
  },
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
