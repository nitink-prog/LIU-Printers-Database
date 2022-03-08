import "./Modal.css";

export default function Modal({ handleClickClose, children }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={handleClickClose}>X</button>
        {children}
      </div>
    </div>
  );
}
