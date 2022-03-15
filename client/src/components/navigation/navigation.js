import React, { useContext, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { menu } from "../../data/menu";
export const Navigation = () => {
  const [theme, setTheme] = useThemeContext();
  console.log(menu);
  return (
    <div>
      {menu.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};
