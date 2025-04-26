import "../styles/Modal.css";
import closeIcon from "../assets/close-icon.svg";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={closeIcon} onClick={onClose} className="modal-close" />
        {children}
      </div>
    </div>
  );
}

export default Modal;
