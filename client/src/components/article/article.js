import React from "react";
import "./article.css";
// import Image from "../../images/code.jpg";

export const Article = (project) => {
  const { name, description, revealText, id, image } = project.project;
  console.log(image);
  return (
    <div className="scene" key={id}>
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
