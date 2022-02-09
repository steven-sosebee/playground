import React, { useState } from "react";
import "./sidebar.css";
export const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  const handleExpandMenu = () => {
    console.log(`initial value: ${expand}`);
    setExpand(!expand);
    console.log(`final value: ${!expand}`);
  };
  return (
    <div className="sidebar-wrapper">
      <div className={expand ? "sidebar-expanded" : "sidebar-collapsed"}>
        <div id="menu-icon" onClick={handleExpandMenu}>
          <i className="fas fa-align-justify"></i>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <i className="fas fa-home"></i>{" "}
            <span className="sidebar-text"> Home</span>
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-layer-group"></i>
            <span className="sidebar-text"> Projects</span>
          </li>
          <li className="sidebar-menu-item">
            <i className="fas fa-user-alt"></i>{" "}
            <span className="sidebar-text"> Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// const btnIcon = document.querySelector(#menu - icon);
// const sidebar = document.querySelector(".sidebar");
// btnIcon.addEventListener("onClick", () => {
//   sidebar.
// })
