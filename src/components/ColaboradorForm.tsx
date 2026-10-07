export const ColaboradorForm = () => {
  return (
    <section className="panel formulario-panel">
      <h2 className="panel__titulo">Registrar colaborador</h2>

      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="form-label fw-semibold">
            Nombre
          </label>

          <input
            id="nombre"
            type="text"
            className="form-control form-control-lg"
            placeholder="Ingresa el nombre..."
          />
        </div>

        <div className="mb-4">
          <label htmlFor="departamento" className="form-label fw-semibold">
            Departamento
          </label>

          <select
            id="departamento"
            className="form-select form-select-lg"
            defaultValue=""
          >
            <option value="" disabled>
              Selecciona un departamento
            </option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Ventas">Ventas</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <fieldset className="mb-4">
          <legend className="form-label fw-semibold">Género</legend>

          <div className="d-flex gap-4">
            <div className="form-check">
              <input
                id="masculino"
                className="form-check-input"
                type="radio"
                name="genero"
                value="masculino"
                defaultChecked
              />

              <label className="form-check-label" htmlFor="masculino">
                Masculino
              </label>
            </div>

            <div className="form-check">
              <input
                id="femenino"
                className="form-check-input"
                type="radio"
                name="genero"
                value="femenino"
              />

              <label className="form-check-label" htmlFor="femenino">
                Femenino
              </label>
            </div>
          </div>
        </fieldset>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-primary flex-grow-1">
            Registrar
          </button>

          <button type="reset" className="btn btn-outline-secondary">
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
};
