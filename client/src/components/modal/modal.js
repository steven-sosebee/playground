import React, { useState } from "react";
import { useThemeContext } from "../../providers/theme/provider_theme";
import { useModalContext } from "../../providers/modal/provider_modal";
import { AddRecipe, ModalSplash} from "./modal_types/";
import "./modal.css";
export const Modal = () => {
  // const [visible, setVisible] = useState(true);
  const { modal, setModal } = useModalContext();

  const handleModal = () => {
    // setVisible(!visible);
    setModal("close");
  };

  if (modal === "recipe") {
    return (
      <div className="modal">
        <div className="pop-up-background">
          <div className="pop-up">
            <AddRecipe />
            <button onClick={handleModal}>Click Me</button>
          </div>
        </div>
      </div>
    );
  }

  if (modal==="splash"){
    return(<ModalSplash modalstate={handleModal}/>

    )
  }
  // if (modal === "recipe") {
  //   return (
  //     <div className="modal">
  //       <div className="pop-up-background">
  //         <div className="pop-up">
  //           <p>Click here to continue...</p>
  //           <button onClick={handleModal}>Click Me</button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return <div></div>;
};
