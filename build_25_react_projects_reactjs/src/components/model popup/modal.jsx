export default function ModelPopup({ id, header, body, footer,onClose }) {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
            <span onClick={onClose} className="close-modal-icon">&times;</span>
            <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
            {
                body ? body : <div>this is our modal body</div>
            }
        </div>
        <div className="footer">
        {
                footer ? footer : <h3>this is our modal footer</h3>
            }
        </div>
      </div>
    </div>
  );
}
