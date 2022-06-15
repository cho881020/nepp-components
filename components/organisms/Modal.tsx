import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { Backdrop } from "../atoms/modal";

const Modal = ({
  activator,
  content,
}: {
  activator: (e: () => void) => ReactNode;
  content: (e: () => void) => ReactNode;
}) => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const target = show && (
    <>
      <Backdrop
        onClick={(e) => {
          if (e.currentTarget !== e.target) return;
          handleClose();
        }}
      >
        {content(handleClose)}
      </Backdrop>
    </>
  );
  return (
    <>
      {activator(handleOpen)}
      {createPortal(target, document.body)}
    </>
  );
};

export default Modal;
