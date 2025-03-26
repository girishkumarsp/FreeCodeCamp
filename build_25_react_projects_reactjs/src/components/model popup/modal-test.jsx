import { useState } from "react";
import ModelPopup from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div className="Home-contianer"
    >
      <button className="modal-button" onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <ModelPopup
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          body={<div>Customized body</div>}
          footer={<h1>Customized footer</h1>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
