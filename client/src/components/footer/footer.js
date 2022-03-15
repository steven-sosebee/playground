import React from "react";
import "./footer.css";
import { useThemeContext } from "../../providers/theme/provider_theme";

export const Footer = () => {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className={`footer ${theme}`}>
      <p>Made by Steven Sosebee ©️ 2022</p>
      <ul>
        <li>
          <a href="https://www.twitter.com" target="blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/steven-sosebee" target="blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stevensosebee" target="blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/steven.sosebee" target="blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="mailto:swsosebee@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <br></br>
    </div>
  );
};
