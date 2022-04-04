import { useQuery } from "@apollo/client";
import { data } from "jquery";
import React, { useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { QUERY_MAIN_MENU } from "../../utils/queries/menus";
import "./header.css";

export const Headers = () => {
  const { data, loading, error } = useQuery(QUERY_MAIN_MENU, { variables: {} });
  const { theme, setTheme } = useThemeContext();

  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  // console.log(data);
  return (
    <div className={`header ${theme}`}>
      <ul className="list-plain">
        {data.getMenu.map((element) => (
          <li
            key={element._id}
            className={document.location === "/cookbook" ? "active" : ""}
          >
            <a href={element.menuLink}>{element.menuItem}</a>
          </li>
        ))}
      </ul>
      Sosebius Designs
    </div>
  );
};
