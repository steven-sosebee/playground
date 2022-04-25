const { model, createConnection } = require("mongoose");
const projectSchema = require("./project");
const skillSchema = require("./skills");
const resumeApp = createConnection(
  process.env.RESUMEDB || "mongodb://127.0.0.1/resume"
);

const Project = resumeApp.model("Project", projectSchema);
const Skill = resumeApp.model("Skills", skillSchema);

module.exports = { Project, Skill };
