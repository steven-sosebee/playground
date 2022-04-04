import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_WORKOUTS } from "../../utils/queries";
import "./workouts.css";

const Workouts = () => {
  return (
    <>
      <button className="btn btn-add">Add Workout</button>
      <ul className="list-plain">
        <li>Workout 1</li>
        <li>Workout 2</li>
      </ul>
    </>
  );
};
