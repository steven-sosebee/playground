import React, { useState, useContext } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useMutation, useQuery } from "@apollo/client";

export const Button = ({ handleClick, styleClass, buttonText }) => {
  const { theme, setTheme } = useThemeContext();
  const { modal, setModal } = useModalContext();
  return (
    <button className={`${styleClass} ${theme}`} onClick={handleClick}>
      {buttonText}
    </button>
  );
};
