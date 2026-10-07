export const Filtros = () => {
  return (
    <section className="filtros">
      <h2 className="panel__titulo">Buscar colaboradores</h2>

      <div className="row g-3">
        <div className="col-12 col-md-5">
          <label htmlFor="buscarNombre" className="form-label">
            Nombre
          </label>

          <input
            id="buscarNombre"
            type="text"
            className="form-control"
            placeholder="Buscar por nombre..."
          />
        </div>

        <div className="col-12 col-md-4">
          <label htmlFor="filtrarDepartamento" className="form-label">
            Departamento
          </label>

          <select id="filtrarDepartamento" className="form-select">
            <option value="todos">Todos</option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Ventas">Ventas</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="filtrarGenero" className="form-label">
            Género
          </label>

          <select id="filtrarGenero" className="form-select">
            <option value="todos">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
      </div>
    </section>
  );
};
