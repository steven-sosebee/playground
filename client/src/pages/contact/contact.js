import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";

export const ContactPage = () => {
  return (
    <div>
      <h1>Steven Sosebee</h1>
      <h3>Web App Developer</h3>
      <p> I look forward to working with you...</p>
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type={"text"}></input>
      </form>
    </div>
  );
};
