import { useMutation, useQuery } from "@apollo/client";
import React, { useState, useContext } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { DELETE_RECIPE, QUERY_RECIPES } from "../../utils/queries";
import { Button } from "../button/button";
import "./recipe.css";

export const Recipe = ({
  handleTouch,
  handleRecipeDrag,
  handleDragEnter,
  handleRecipeDragEnd,
  dragRecipe,
  recipeData,
  dragging,
  dragNode,
}) => {
  // console.log(handleRecipeDrag);
  const { refetch } = useQuery(QUERY_RECIPES, {
    variables: {},
  });
  const { theme, setTheme } = useThemeContext();
  const recipeId = recipeData._id;
  const [deleteRecipe, { data, loading, error }] = useMutation(DELETE_RECIPE);

  const handleRecipeDelete = async (event) => {
    try {
      await deleteRecipe({ variables: { recipeId: recipeId } });
      await refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      onDragStart={handleRecipeDrag}
      onTouchStart={handleRecipeDrag}
      // onTouchMove={handleTouch}
      onDragEnter={(e) => {
        handleDragEnter(e, { recipeId, type: "item" });
      }}
      onDragEnd={(e) => {
        handleRecipeDragEnd(e, recipeId);
      }}
      id={recipeId}
      draggable
      className={`recipe-block draggable ${theme} ${
        dragging && recipeId === dragRecipe ? "dragging" : ""
      }`}
    >
      <div className={`recipe-header ${theme}`}>
        <span>{recipeData.recipeName}</span>
        <div className="commands">
          <button className="btn btn-edit">...</button>
          <Button
            handleClick={handleRecipeDelete}
            styleClass="btn btn-delete"
            buttonText={"x"}
          />
          <button onClick={handleRecipeDelete} className="btn btn-delete">
            X
          </button>
        </div>
      </div>
      {recipeData.ingredients.map((ingredient, i) => (
        <div key={`${ingredient}${i}`}>
          <div>{i}. </div>
          <div className={`recipe-body ${theme}`}>{ingredient.ingredient}</div>
        </div>
      ))}
    </div>
  );
};
