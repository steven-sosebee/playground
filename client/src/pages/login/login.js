import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";
import { Form } from "../../components/form/form";

export const LoginPage = () => {
  return (
    <div>
      <h1>Please log in to continue...</h1>
      <Form />
    </div>
  );
};
