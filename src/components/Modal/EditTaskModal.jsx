import { useState, useRef } from 'react'
import Modal from './Modal'

const EditTaskModal = ({ show, onClose, task, onSave }) => {

  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [status, setStatus] = useState(task.status || "To do");
  const editFormRef = useRef();


  const handleSave = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: task.id,
      title: title.trim(),
      description: description.trim(),
      status: status,
    };

    onSave(updatedTask);

    onClose();
  }




  return (
    <Modal
    show={show}
    onClose={onClose}
    title="Modifica Task"
    content={
      <form ref={editFormRef} onSubmit={handleSave}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Nome del task</label>
        <input
          id="title"
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Descrizione</label>
        <textarea
          id="description"
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="status" className="form-label">Stato</label>
        <select
          id="status"
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="To do">To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-secondary me-2" onClick={onClose}>
          Annulla
        </button>
        <button type="submit" className="btn btn-primary">
          Salva
        </button>
      </div>
    </form>
    }
    confirmText="Salva"
    onConfirm={() => {
      if (editFormRef.current) {
        editFormRef.current.requestSubmit(); // ✅ submit simulato
      }
    }}
    />
  )
}

export default EditTaskModal