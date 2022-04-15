const { model, createConnection } = require("mongoose");
const projectSchema = require("./project");

const resumeApp = createConnection(
  process.env.RESUMEDB || "mongodb://127.0.0.1/resume"
);

const Project = resumeApp.model("Model", projectSchema);
