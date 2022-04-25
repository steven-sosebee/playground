import React from "react";

export const Form = ({ formInputs, formButtons, formName }) => {
  console.log(formInputs);
  console.log(formButtons);
  return (
    <form>
      {formInputs.map((item) => (
        <div>
          <label
            key={`${formName}_${item.name}`}
            className={item.class}
            htmlFor={item.name}
          >
            {item.name}
          </label>
          <input id={item.name} className={item.class} type={item.type}></input>
        </div>
      ))}
      {formButtons.map((button) => (
        <button
          key={`${formName}_${button.button}`}
          className={button.class}
          onClick={button.function}
        >
          {button.button}
        </button>
      ))}
    </form>
  );
};
