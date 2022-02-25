import React, { useState, useContext } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import "./recipe.css";

export const Recipe = ({ recipeData }) => {
  const { theme, setTheme } = useThemeContext();
  //   console.log(recipeData);
  return (
    <div className={`recipe-block ${theme}`}>
      <div className={`recipe-header ${theme}`}>
        <span>{recipeData.recipeName}</span>
        <div className="commands">
          <button className="btn-edit">...</button>
          <button className="btn-delete">X</button>
        </div>
      </div>
      {recipeData.ingredients.map((ingredient, i) => (
        <div>
          <div>{i}. </div>
          <div className={`recipe-body ${theme}`}>{ingredient.ingredient}</div>
        </div>
      ))}
    </div>
  );
};
