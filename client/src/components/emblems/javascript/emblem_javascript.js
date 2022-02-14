import React, { useContext } from "react";
import "./emblem_javascript.css";
import { ThemeContext } from "../../../providers/theme/provider_theme";
// import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
export const JSLogo = () => {
  // const { currentTheme } = useContext(ThemeContext);

  return (
    <div className="emblem-js">
      <div className="logo-js">
        <i className="fa fab fa-js"></i>
      </div>
      {/* <span>{currentTheme}</span> */}
      {/* <FontAwesomeIcon icon="fa-brands fa-css3-alt" /> */}
    </div>
  );
};
