import { useState, useEffect } from "react";


const useTasks = () => {

  const [tasks, setTasks] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
    .then(res => res.json())
    .then(data => {
      console.log(`DATI RICEVUTI: ${data}`);
      setTasks(data);
    })
  
    .catch(err => console.log(`ERRORE NEL FETCH DEI DATI:`, err))
  }, []);

  const addTask = () =>{};
  const removeTask = () => {};
  const updateTask = () => {};




  return {tasks, setTasks, addTask, removeTask, updateTask}
}

export default useTasks