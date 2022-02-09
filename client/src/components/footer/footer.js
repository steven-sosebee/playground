import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <p>Made by Steven Sosebee ©️ 2022</p>
      <ul>
        <li>
          <a href="https://www.twitter.com" target="blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/steven-sosebee" target="blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stevensosebee" target="blank">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/steven.sosebee" target="blank">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="blank">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="mailto:swsosebee@gmail.com">
            <i className="fad fa-envelope"></i>
          </a>
        </li>
      </ul>
      <br></br>
    </div>
  );
};
