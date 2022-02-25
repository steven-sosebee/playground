import React, { useContext, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
import { Recipe } from "../../components/recipe/recipe";
import "./cookbook.css";

export const Cookbook = () => {
  const { theme, setTheme } = useThemeContext();
  const { loading, data, error } = useQuery(QUERY_RECIPES, { variables: {} });
  // const recipes = data.recipes;

  if (loading) return <div>loading</div>;
  if (error) return `Error: ${error.message}`;
  // console.log(data.recipes);
  return (
    <div className={`cookbook ${theme}`}>
      {data.recipes.map((recipe) => (
        // <div> {recipe.recipeName}</div>
        <Recipe recipeData={recipe} />
      ))}
    </div>
  );
};
