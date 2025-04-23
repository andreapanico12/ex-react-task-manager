import { createContext } from "react"
import useTasks from "../hooks/useTasks";


const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks();

  return(
    <GlobalContext.Provider value={{ tasks, setTasks }}>
      {children}
    </GlobalContext.Provider>
  )
}
    



export {GlobalContext, GlobalProvider}