import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { useQuery, useMutation } from "@apollo/client";
import { Form } from "../../components/form/form";
export const TestingPage = () => {
  return (
    <div>
      <Form
        formInputs={[
          { name: "apple", type: "text" },
          { name: "grape", type: "checkbox" },
          { name: "orange", type: "radio" },
        ]}
        formButtons={[{ button: "Submit" }, { button: "Cancel" }]}
      />
    </div>
  );
};
