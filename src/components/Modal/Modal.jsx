import React from "react";
import Transition from "../TransitionContainers/Transition/Transition";
import Backdrop from "../../components/Backdrop/Backdrop";

const Modal = ({ isShow, setIsShow, children }) => {
  return (
    <Transition isShow={isShow} setIsShow={setIsShow} className="fade">
      <Backdrop>{children}</Backdrop>
    </Transition>
  );
};

export default Modal;
