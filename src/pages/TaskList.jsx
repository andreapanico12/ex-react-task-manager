import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"

const TaskList = () => {

  const { tasks } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortOrder((prev) => prev * -1); //Inverte l'ordine
    } else {
      setSortBy(field);
      setSortOrder(1); // Ordine crescente
    }
  };



 
  const sortedTasks = useMemo(() => {
    const sorted = [...tasks];

    sorted.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title) * sortOrder;
      }

      if (sortBy === "status") {
        const order = { "To do": 0, "Doing": 1, "Done": 2 };
        return (order[a.status] - order[b.status]) * sortOrder;
      }

      if (sortBy === "createdAt") {
        return (new Date(a.createdAt) - new Date(b.createdAt)) * sortOrder;
      }

      return 0;
    });

    return sorted;
  }, [tasks, sortBy, sortOrder]);


  return (
    <div className="container py-4">
    <h2 className="mb-4">Elenco Task</h2>

    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("title")}>Titolo</th>
          <th onClick={() => handleSort("status")}>Stato</th>
          <th onClick={() => handleSort("createdAt")}>Creato il</th>
        </tr>
      </thead>
      <tbody>
        {sortedTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TaskList