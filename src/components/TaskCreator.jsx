import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // no manda datos al backend
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 mb-5 row">
      <div className="col-10">
        <input
          type="text"
          placeholder="Ingrese una nueva tarea"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="col-2 px-0">
        <button className="btn btn-primary btn-md">Guardar</button>
      </div>
    </form>
  );
};
