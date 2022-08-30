import { useState } from "react";
import rules from "../../assets/images/image-rules.svg";
import closeIcon from "../../assets/images/icon-close.svg";

import "./style.css";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`${isModalOpen ? "" : "desktopAlign"}`}>
      {isModalOpen && (
        <div className="modal animeLeft">
          <h2 className="modal-title">Rules</h2>
          <img className="modal-content" src={rules} alt="Rules" />
          <button className="modal-close" onClick={() => setIsModalOpen(false)}>
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
      )}
      <button className="modal-open" onClick={() => setIsModalOpen(true)}>
        Rules
      </button>
    </div>
  );
}

export default Modal;
