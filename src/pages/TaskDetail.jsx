import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Modal from "../components/Modal/Modal";

function TaskDetail() {

  const { id } = useParams();
  const { tasks, removeTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === parseInt(id));

  const [showModal, setShowModal] = useState(false);


  if (!task) {
    return <p>Task non trovata.</p>;
  }

  const handleDelete = async () =>{
    try{
      await removeTask(task.id);
      alert("Task eliminata con successo");
      navigate("/");
    } catch (error) {
      alert("Errore durante l'eliminazione del task:", error.message);
    }
  };


  return (
    <div className="container py-4">
    <h2 className="mb-4">Dettaglio Task</h2>
    <div className="card p-3">
      <h4>{task.title}</h4>
      <p><strong>Descrizione:</strong> {task.description}</p>
      <p><strong>Stato:</strong> {task.status}</p>
      <p><strong>Creato il:</strong> {new Date(task.createdAt).toLocaleString()}</p>

      <button
        className="btn btn-danger mt-3"
        onClick={() => setShowModal(true)}
      >
        Elimina Task
      </button>

      <Modal
        show={showModal}
        title="Conferma Eliminazione"
        content={<p>Sei sicuro di voler eliminare questo task?</p>}
        onClose={() => setShowModal(false)}
        onConfirm={handleDelete}
        confirmText="Elimina"
      />

    </div>
  </div>
  )
}

export default TaskDetail