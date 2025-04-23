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

  const addTask = async ({title, description, status}) =>{
    try{
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({title, description, status}),
    });
    
    const result = await response.json();
    console.log("Nuovo task aggiunto:", result);

    if(!result.success){
      throw new Error(result.error);
    }

    setTasks((prevTasks) => [...prevTasks, result.task])
  } catch (error) {
    throw error;
  };
}  






  const removeTask = () => {};
  const updateTask = () => {};




  return {tasks, setTasks, addTask, removeTask, updateTask}
}

export default useTasks