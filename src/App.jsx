import { BrowserRouter as Router, Routes , Route, NavLink } from "react-router-dom"      
import AddTask from "./pages/AddTask"      
import TaskList from "./pages/TaskList"
import { GlobalProvider } from "./context/GlobalContext"
import TasksNavbar from "./components/TasksNavbar"
import TaskDetail from "./pages/TaskDetail"
function App() {                                                


  return (
    <GlobalProvider>
      <Router>
        <TasksNavbar />
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetail />} />
       </Routes>

     </Router>
    </GlobalProvider>
  ) 

}

export default App
