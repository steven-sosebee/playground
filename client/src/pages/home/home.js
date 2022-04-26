import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";
import { images } from "../../images/images";
import "./home.css";

export const HomePage = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // const countInterval = setInterval(()=>{
    //   setCounter(prev=>prev+1)
    // },1000)
    // return ()=>clearInterval(countInterval);
  }, []);
  const { theme, setTheme } = useThemeContext();
  return (
    <div className={`hero ${theme}`}>
      <div id="profile">
        <img
          src={
            images.find((image) => image.Title === "Professional Profile").Link
          }
          width="300px"
        ></img>
      </div>
      <div id="intro" className={`primary-txt ${theme}`}>
        <h1 id="site-name">Steven Sosebee</h1>
        <h3> Full Stack Web Developer</h3>
        <p>
          {" "}
          Welome to my portfolio. Please feel free to look around and try out
          various web apps and other interests. I look forward to working with
          you on your business needs.
        </p>
        <p>{counter}</p>
      </div>
    </div>
  );
};
