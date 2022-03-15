import { ApolloClient, useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button } from "../../button/button";
import { ADD_RECIPE, QUERY_RECIPES } from "../../../utils/queries";
export const AddRecipe = () => {
  const [addRecipe, { data, loading, error }] = useMutation(ADD_RECIPE);
  const { refetch } = useQuery(QUERY_RECIPES, {
    variables: {},
  });
  const [recipe, setRecipe] = useState();
  const handleChangeRecipe = (event) => {
    setRecipe(event.target.value);
  };
  const handleAddRecipe = async (event) => {
    event.preventDefault();
    // console.log(recipe);
    if (!recipe) return;
    addRecipe({ variables: { recipeName: recipe } });
    setRecipe("");
    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
    await refetch();
  };
  return (
    <form className="form-recipe">
      <label htmlFor="input-recipe-name">Recipe Name:</label>
      <input
        id="formRecipeName"
        onChange={handleChangeRecipe}
        className="form-input"
        type={"text"}
      ></input>
      <Button
        buttonText={"Submit"}
        handleClick={handleAddRecipe}
        styleClass={"btn btn-edit"}
      />
      {/* <input type={"submit"} onClick={handleAddRecipe}></input> */}
    </form>
  );
};
