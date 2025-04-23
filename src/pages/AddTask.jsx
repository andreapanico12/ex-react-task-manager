import { useState, useRef, useContext} from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTask = () => {

const [title, setTitle] = useState("");
const [error, setError] = useState("");

const descriptionRef = useRef();
const statusRef = useRef();

const { addTask } = useContext(GlobalContext);

const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

const handleSubmit = (e) => {
  e.preventDefault();

  //Validazione nome task
  const hasInvalidChars = [...symbols].some((char) => title.includes(char));
  if (!title.trim()){
    setError("Il nome della task è obbligatorio!");
    return;
  } else if (hasInvalidChars) {
    setError("Il nome della task non può contenere caratteri speciali!");
    return;
  } else {
    setError("");
  }

  // Creazione nuovo task

  const newTask = {
    title: title.trim(),
    description: descriptionRef.current.value.trim(),
    status: statusRef.current.value,
    createdAt: new Date().toISOString(),
  };

  console.log("Nuovo task:", newTask);

  // Aggiunta del task all'API

  try{
     addTask(newTask);
     alert("Task aggiunto con successo!");
     // reset form
    setTitle("");
    descriptionRef.current.value = "";
    statusRef.current.value = "To do";
} catch (error) {
  alert("Errore durante l'aggiunta del task:", error.message);

  }
};





  return (
  <div className="container py-4">
  <h2 className="mb-4">Aggiungi un nuovo Task</h2>
  <form onSubmit={handleSubmit} className="border p-4 rounded bg-light">
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Nome del task</label>
      <input
        id="title"
        className="form-control"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>

    <div className="mb-3">
      <label htmlFor="description" className="form-label">Descrizione</label>
      <textarea
        id="description"
        className="form-control"
        rows="3"
        ref={descriptionRef}
      ></textarea>
    </div>

    <div className="mb-3">
      <label htmlFor="status" className="form-label">Stato</label>
      <select id="status" className="form-select" ref={statusRef} defaultValue="To do">
        <option>To do</option>
        <option>Doing</option>
        <option>Done</option>
      </select>
    </div>

    <button type="submit" className="btn btn-primary">Aggiungi Task</button>
  </form>
</div>
);
 
}

export default AddTask