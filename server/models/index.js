// const Users = require("./utils/users");
// const Social = require("./utils/social");
const { Users, Social, Menu } = require("./utils");
//cooking app models
const { Recipe, Ingredient, Instruction } = require("./cooking");
// workout app models
const { Workout, Exercise } = require("./workout-app");
// whiskey app models
const { Whiskey, CheckIn, Distillery } = require("./whiskey");
const { Skill, Project } = require("./resume");
module.exports = {
  Users,
  Menu,
  Recipe,
  Ingredient,
  Instruction,
  Social,
  Whiskey,
  CheckIn,
  Distillery,
  Workout,
  Exercise,
  Project,
  Skill,
};
