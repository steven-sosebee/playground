import { useQuery } from "@apollo/client";
import { data } from "jquery";
import React, { useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { QUERY_MAIN_MENU } from "../../utils/queries/menus";
import "./header.css";

export const Headers = () => {
  const { data, loading, error } = useQuery(QUERY_MAIN_MENU, { variables: {} });
  const { theme, setTheme } = useThemeContext();
  const [activeMenuItem, setActiveMenuItem] = useState();

  const handleActiveMenu = (e) => {
    const active = e._targetInst.return.key;
    setActiveMenuItem(active);
  };

  const resetActiveMenu = (e) => {
    setActiveMenuItem("");
  };
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={`header ${theme}`}>
      <ul className="list-plain">
        {data.getMenu.map((element) => (
          <li
            key={element._id}
            onMouseEnter={handleActiveMenu}
            onMouseLeave={resetActiveMenu}
            className={element._id === activeMenuItem ? "active" : ""}
          >
            <a href={element.menuLink}>{element.menuItem}</a>
          </li>
        ))}
      </ul>
      Sosebius Designs
    </div>
  );
};
