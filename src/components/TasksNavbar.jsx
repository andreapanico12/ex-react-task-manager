import { NavLink } from "react-router-dom";


function TasksNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark" >
    <div className="container-fluid">

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link fw-bolder" to="/">Tasks List</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link fw-bolder" to="/add">Add Task</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
};


export default TasksNavbar