import { createContext, useState, useEffect } from "react"


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const API__URL = import.meta.env.VITE_API_URL

  useEffect(() => {
    fetch(`${API__URL}/tasks`)
    .then(res => res.json())
    .then(data => {
      console.log(`DATI RICEVUTI: ${data}`);
      setTasks(data);
    })
    .catch(err => console.log(`ERRORE NEL FETCH DEI DATI:`, err))
  }, []);

  return(
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  )
}
    



export {GlobalContext, GlobalProvider}