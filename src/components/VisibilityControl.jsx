export const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask }) => {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro que deseas limpiar las tareas hechas?")){
        cleanTask();
    }
  };

  return (
    <div className="h5 d-flex justify-content-between bg-secondary text-white text-center p-2 mt-4 border-primary align-items-center">
      <div className="form-check form-switch">
      <input
      className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Mostrar tareas hechas</label>
      </div>
      <button onClick={handleDelete} className="btn btn-danger">Limpiar</button>
    </div>
  );
};
