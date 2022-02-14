import React from "react";
import "./background.css";
import { useThemeContext } from "../../providers/theme/provider_theme";

export const Background = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className={`background ${theme}`}>
      <div style={{ "--i": "1" }}></div>
      <div style={{ "--i": "2" }}></div>
      <div style={{ "--i": "3" }}></div>
      <div style={{ "--i": "5" }}></div>
      <div style={{ "--i": "4" }}></div>
      <div style={{ "--i": "6" }}></div>
      <div style={{ "--i": "7" }}></div>
      <div style={{ "--i": "8" }}></div>
      <div style={{ "--i": "9" }}></div>
      <div style={{ "--i": "10" }}></div>
    </div>
  );
};
