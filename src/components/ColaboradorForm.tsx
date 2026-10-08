import { useState } from "react";
import type { Colaborador } from "../types/Colaborador";
// import { colaboradores } from "../data/colaboradores";
// import avatarMasculino from "../assets/img/avatar_masculino.png";
// import avatarFemenino from "../assets/img/avatar_femenino.png";

interface ColaboradorFormProps {
  onRegistrar: (colaborador: Colaborador) => void;
}

export const ColaboradorForm = ({ onRegistrar }: ColaboradorFormProps) => {
  const [nombre, setNombre] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [genero, setGenero] = useState<"masculino" | "femenino">("masculino");
  // const avatar = genero === "masculino" ? avatarMasculino : avatarFemenino;

  const registrarColaborador = () => {
    const nuevoColaborar: Colaborador = {
      id: Date.now(),
      nombre: nombre,
      departamento: departamento,
      genero: genero,
    };

    onRegistrar(nuevoColaborar);

    setNombre("");
    setDepartamento("");
    setGenero("masculino");
  };
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
            value={nombre}
            className="form-control form-control-lg"
            onChange={(event) => setNombre(event.target.value)}
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
            value={departamento}
            onChange={(event) => setDepartamento(event.target.value)}
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
                checked={genero === "masculino"}
                onChange={() => setGenero("masculino")}
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
                checked={genero === "femenino"}
                onChange={() => setGenero("femenino")}
              />

              <label className="form-check-label" htmlFor="femenino">
                Femenino
              </label>
            </div>
          </div>
        </fieldset>

        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-primary flex-grow-1"
            onClick={registrarColaborador}
          >
            Registrar
          </button>

          <button type="reset" className="btn btn-outline-secondary">
            Limpiar
          </button>
        </div>
      </form>
      {/* <hr></hr>
      <h1>Prueba</h1>
      <p className="mb-1">
        Nombre: <strong>{nombre}</strong>
      </p>
      <p className="mb-0">
        Género: <strong>{genero}</strong>
      </p>
      <p className="mb-0">
        Departamento: <strong>{departamento}</strong>
      </p>
      <img src={avatar} /> */}
    </section>
  );
};
