import React from "react";
import "./article.css";
// import Image from "../../images/code.jpg";

export const Article = (project) => {
  const { name, description, revealText, id, image } = project.project;
  // console.log([project]);
  const sceneClass = (id) => {
    return id % 2 ? "scene left" : "scene right";
  };
  return (
    <div className={sceneClass(id)} key={id}>
      <div
        className="project"
        style={{ backgroundImage: "url(" + image + ")" }}
      >
        <h2>{name}</h2>
        <p className="project-display">{description}</p>
        <p className="project-reveal">{revealText}</p>
        <div className="article-icon">
          <div className="article-icon-inner"></div>
        </div>
      </div>
    </div>
  );
};
