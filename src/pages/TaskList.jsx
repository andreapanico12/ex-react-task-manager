import { useContext, useState, useMemo, useRef, useEffect } from "react"
import { GlobalContext } from "../context/GlobalContext"
import TaskRow from "../components/TaskRow"
import useDebounce from "../hooks/useDebounce"

const TaskList = () => {

  const { tasks } = useContext(GlobalContext);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleInput = () => {
      setSearchTerm(inputElement.value);
    };

    inputElement.addEventListener("input", handleInput);
    return () => inputElement.removeEventListener("input", handleInput);
  }, []);

  const handleSort = (field) => {
    if (field === sortBy) {
      setSortOrder((prev) => prev * -1); //Inverte l'ordine
    } else {
      setSortBy(field);
      setSortOrder(1); // Ordine crescente
    }
  };



 
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    if (debouncedSearch.trim() !== "") {
      filtered = tasks.filter((task) =>
        task.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }



    const sorted = [...filtered];

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
  }, [tasks, sortBy, sortOrder, debouncedSearch]);


  return (
    <div className="container py-4">
    <h2 className="mb-4">Elenco Task</h2>

    <div className="mb-3">
        <input
          type="text"
          placeholder="Cerca per titolo..."
          className="form-control"
          ref={inputRef}
          
        />
      </div>


    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("title")}>Titolo</th>
          <th onClick={() => handleSort("status")}>Stato</th>
          <th onClick={() => handleSort("createdAt")}>Creato il</th>
        </tr>
      </thead>
      <tbody>
        {filteredAndSortedTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default TaskList