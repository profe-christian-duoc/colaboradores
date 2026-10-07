import { colaboradores } from "../data/colaboradores";
import { ColaboradorCard } from "./ColaboradorCard";

export const ColaboradoresLista = () => {
  return (
    <section className="colaboradores">
      <div className="colaboradores__encabezado">
        <h2>Colaboradores</h2>

        <span className="colaboradores__cantidad">{colaboradores.length}</span>
      </div>

      <div className="row g-3">
        {colaboradores.map((colaborador) => (
          <div className="col-12 col-md-6" key={colaborador.id}>
            <ColaboradorCard
              id={colaborador.id}
              nombre={colaborador.nombre}
              departamento={colaborador.departamento}
              genero={colaborador.genero}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
