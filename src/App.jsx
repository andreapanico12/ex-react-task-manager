import { BrowserRouter as Router, Routes , Route, NavLink } from "react-router-dom"      
import AddTask from "./pages/AddTask"      
import TaskList from "./pages/TaskList"

function App() {                                                


  return (
    <Router>
      <nav>
        <NavLink to="/">Task List</NavLink>
        <NavLink to="/add">Add Task</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
      </Routes>

    </Router>
  )
}

export default App
