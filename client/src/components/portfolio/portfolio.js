import React from "react";
import "./portfolio.css";
import { Article } from "../article/article";
import { projects } from "../../data/projects";
export const Portfolio = () => {
  //   console.log(projects);
  return (
    <div className="portfolio">
      {projects.map((project) => (
        <Article project={project} id={projects.indexOf(project) + 1} />
      ))}
    </div>
  );
};
