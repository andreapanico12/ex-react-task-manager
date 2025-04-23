import React from 'react'
import { Link } from 'react-router-dom'

const statusClass={
  "To do": "bg-danger text white",
  "Doing": "bg-warning",
  "Done": "bg-success text-white"
}

const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>
        <Link to={`/task/${task.id}`}>{task.title}</Link>
      </td>
      <td className={statusClass[task.status] || ""}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  )
}

export default React.memo(TaskRow)