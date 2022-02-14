import React, { useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";

import "./header.css";

export const Headers = () => {
  const { theme, setTheme } = useThemeContext();
  return <div className={`header ${theme}`}>Sosebius Designs</div>;
};
