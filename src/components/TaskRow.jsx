import React from 'react'

const statusClass={
  "To do": "bg-danger text white",
  "Doing": "bg-warning",
  "Done": "bg-success text-white"
}

const TaskRow = ({ task }) => {
  return (
    <tr>
      <td>{task.title}</td>
      <td className={statusClass[task.status] || ""}>{task.status}</td>
      <td>{new Date(task.createdAt).toLocaleDateString()}</td>
    </tr>
  )
}

export default React.memo(TaskRow)