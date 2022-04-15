import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery } from "@apollo/client";
import { QUERY_RECIPES } from "../../utils/queries";
import { Recipe } from "../../components/recipe/recipe";
import $ from "jquery";
import "./cookbook.css";

export const Cookbook = () => {
  const { theme, setTheme } = useThemeContext();
  const { modal, setModal } = useModalContext();
  const { loading, data, error } = useQuery(QUERY_RECIPES, { variables: {} });
  const [recipeList, setRecipeList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [dragging, setDragging] = useState(false);
  const dragRecipe = useRef();
  const dragNode = useRef();
  const dragOrigin = useRef();
  const dragDestination = useRef();
  // console.log("Render...");
  // console.log("Menu");
  // console.log(menuList);
  // console.log("Recipes");
  // console.log(recipeList);
  useEffect(() => {
    console.log("Effect called...");
    if (data && data.recipes && !loading) {
      // compare data to menu list
      const filteredArray = data.recipes.filter((i) => !menuList.includes(i));
      // set recipe list to filtered data
      setRecipeList(filteredArray);
      // console.log("Recipe list set...");
      //check if menu item was deleted
      const currentMenu = menuList.filter((i) => data.recipes.includes(i));
      // console.log(currentMenu);
      if (menuList.length > currentMenu.length) {
        setMenuList(currentMenu);
        // console.log("Menu list set...");
      }
    }
  }, [data]);

  // sets loading screen while retrieving data
  if (loading) return <div>loading</div>;
  if (error) {
    console.log(error.message);
    return `Error: ${error.message}`;
  }

  // function to call modal
  const handleAddRecipe = () => {
    setModal("recipe");
  };

  // functions to handle the drag and drop

  // dragging function
  const handleRecipeDrag = (e) => {
    console.log(e.type);
    dragRecipe.current =
      e.type === "touchstart"
        ? e.targetTouches[0].target.parentNode.id
        : e.target.id;
    console.log(dragRecipe.current);
    // dragNode.current = e.currentTarget;
    dragNode.current = e.currentTarget;
    dragOrigin.current = e.currentTarget.parentNode.id;
    // console.log(`Dragging started from...${dragOrigin.current}`);
    setDragging(true);
  };
  const handleTouch = (e) => {
    e.type === "touchmove" ? console.log("touch") : console.log("mouse");
    console.log(`Tag! I'm it:  ${e.targetTouches[0].target.parentNode.id}`);
    console.log(e);
  };
  // console.log(menuList);
  // console.log(recipeList);
  // e.effectAllowed = "copyMove";

  const handleRecipeDragEnd = (e, params) => {
    // console.log(params);
  };
  // drop function
  const handleDrop = (e) => {
    // e.preventDefault();
    // console.log(`Dropped into...${dragDestination.current}`);
    // console.log(dragRecipe.current);
    reorderList(dragRecipe.current);
    dragDestination.current = null;
    dragOrigin.current = null;
    setDragging(false);
  };
  // drop zone functions
  const handleDragOver = (e) => {
    // console.log("ready to drop");
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDragEnter = (e, ...params) => {
    // console.log(e.target);
    // dragTarget = e.currentTarget;
    // console.log(e.currentTarget.id);
    let dragIndex;
    let dropIndex;
    let drag;
    let newRecipeList;
    dragDestination.current = e.currentTarget.id;
    // console.log(`Currently over...${dragDestination.current}`);
    // console.log(params);
    dragIndex = recipeList.findIndex(
      (recipe) => recipe._id === dragRecipe.current
    );
    dropIndex = recipeList.findIndex(
      (recipe) => recipe._id === dragDestination.current
    );
    drag = recipeList[dragIndex];
    // console.log(params[0].type);
    if (
      dragOrigin.current === e.currentTarget.parentNode.id &&
      params[0].type === "item" &&
      dragIndex !== dropIndex
    ) {
      newRecipeList = [...recipeList];

      // console.log(newRecipeList);
      if (dragIndex > dropIndex) {
        newRecipeList.splice(dropIndex, 0, drag);
        newRecipeList.splice(dragIndex + 1, 1);
      }

      newRecipeList.splice(dropIndex + 1, 0, drag);
      newRecipeList.splice(dragIndex, 1);
      // console.log(newRecipeList);
      setRecipeList(newRecipeList);

      // console.log(`Dragging index...${dragIndex}`);
      // console.log(`Dropping index...${dropIndex}`);
      // console.log("Item drop");
    }

    // reorderList(data);
  };

  // attempting to set new lists
  const reorderList = (recipeToMove) => {
    let newRecipeList;
    let newMenuList;
    // console.log(recipeList);
    // console.log(menuList);
    if (
      dragOrigin.current === "recipe-list" &&
      dragDestination.current === "menu"
    ) {
      newMenuList = [...menuList];
      newRecipeList = [...recipeList];
      const recipeToRemove = recipeList.findIndex(
        (recipe) => recipe._id === recipeToMove
      );
      newMenuList.push(recipeList[recipeToRemove]);
      newRecipeList.splice(recipeToRemove, 1);
      console.log(newRecipeList);
      setRecipeList(newRecipeList);
      // console.log("Recipe list set...");
      // console.log(recipeList);

      setMenuList(newMenuList);
      // console.log("Menu list set...");
      // console.log(menuList);
    }
    if (
      dragOrigin.current === "menu-list" &&
      dragDestination.current === "recipe-list"
    ) {
      newMenuList = [...menuList];
      newRecipeList = [...recipeList];
      const recipeToRemove = menuList.findIndex(
        (recipe) => recipe._id === recipeToMove
      );
      newRecipeList.push(menuList[recipeToRemove]);
      newMenuList.splice(recipeToRemove, 1);

      setRecipeList(newRecipeList);
      // console.log("Recipe list set...");
      // console.log(recipeList);

      setMenuList(newMenuList);
      // console.log("Menu list set...");
      // console.log(menuList);
    }
  };

  // component function
  return (
    <div className={`cookbook ${theme}`}>
      <div className="btn btn-add" onClick={handleAddRecipe}>
        Create Recipe
      </div>
      <div
        onDrop={handleDrop}
        // onTouchEnd={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        id="recipe-list"
        className="list"
      >
        {/* {data.recipes.map((recipe) => ( */}
        {recipeList.map((recipe) => (
          <Recipe
            key={recipe._id}
            handleTouch={handleTouch}
            handleRecipeDrag={handleRecipeDrag}
            handleDragEnter={handleDragEnter}
            handleRecipeDragEnd={handleRecipeDragEnd}
            dragRecipe={dragRecipe.current}
            recipeData={recipe}
            dragging={dragging}
            dragNode={dragNode.current}
          />
        ))}
      </div>
      <div
        id="menu"
        onDragEnter={handleDragEnter}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Menu
        <div className="list" id="menu-list">
          {menuList.map((recipe) => (
            <Recipe
              key={recipe._id}
              handleRecipeDrag={handleRecipeDrag}
              handleDragEnter={handleDragEnter}
              handleRecipeDragEnd={handleRecipeDragEnd}
              dragRecipe={dragRecipe.current}
              recipeData={recipe}
              dragging={dragging}
              dragNode={dragNode.current}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
