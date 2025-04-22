import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

const TaskList = () => {

  const { tasks } = useContext(GlobalContext);


  return (
    <div className="container py-4">
      <h1 className="mb-4">LISTA DEI TASK</h1>
      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>Nome</th>
            <th>Stato</th>
            <th>Data di creazione</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList