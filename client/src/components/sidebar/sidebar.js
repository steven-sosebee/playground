import React, { useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { Toggle } from "../toggle/toggle";

import "./sidebar.css";
export const Sidebar = () => {
  const [expand, setExpand] = useState(true);
  const [value, setValue] = useState(true);
  const { theme, setTheme } = useThemeContext();
  console.log(theme);
  const currentTheme = theme ? "dark" : "light";
  const expanded = expand ? "sidebar-expanded" : "sidebar-collapsed";
  const handleExpandMenu = () => {
    console.log(`initial value: ${expand}`);
    setExpand(!expand);
    console.log(`final value: ${!expand}`);
  };
  const handleToggleTheme = () => {
    !value === true ? setTheme("dark") : setTheme("light");
    setValue(!value);
  };

  return (
    // <div className="sidebar-wrapper">
    <div className={`${theme} ${expanded}`}>
      <div id="menu-icon" onClick={handleExpandMenu}>
        <i className="fas fa-align-justify"></i>
      </div>
      <button onClick={handleToggleTheme} className="theme-toggle">
        {theme}
      </button>
      <div>
        <span>{value ? "dark" : "light"}</span>
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
      <div className="sidebar-menu-item toggle-item">
        <span className="sidebar-text ">Dark Mode: </span>
        {/* <Toggle isOn={value} handleToggle={() => setValue(!value)}></Toggle> */}
        <Toggle isOn={value} handleToggle={() => handleToggleTheme()}></Toggle>
      </div>
    </div>
    // </div>
  );
};

// const btnIcon = document.querySelector(#menu - icon);
// const sidebar = document.querySelector(".sidebar");
// btnIcon.addEventListener("onClick", () => {
//   sidebar.
// })
