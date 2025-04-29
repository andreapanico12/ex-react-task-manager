import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const Modal = ( { title, content, show, onClose, onConfirm, confirmText = "Conferma", hideFooterButtons = false } ) => {

  if (!show) return null

  return ReactDom.createPortal(
    <div className={`modal fade show d-block ${styles.overlay}`}>
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content shadow">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">{content}</div>
        {!hideFooterButtons && (
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                Annulla
              </button>
              <button className="btn btn-danger" onClick={onConfirm}>
                {confirmText}
              </button>
            </div>
          )}
      </div>
    </div>
  </div>,
  document.getElementById("modal-root")
  );

};

export default Modal