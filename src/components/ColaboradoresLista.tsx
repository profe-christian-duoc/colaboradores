import type { Colaborador } from "../types/Colaborador";
import { ColaboradorCard } from "./ColaboradorCard";

interface ColaboradoresListaProps {
  colaboradores: Colaborador[];
}
export const ColaboradoresLista = ({
  colaboradores,
}: ColaboradoresListaProps) => {
  return (
    <section className="colaboradores">
      <div className="colaboradores__encabezado">
        <h2>Colaboradores</h2>

        <span className="colaboradores__cantidad">{colaboradores.length}</span>
      </div>

      <div className="row g-3">
        {colaboradores.map((colaborador) => (
          <div className="col-12 col-lg-6 col-md-6" key={colaborador.id}>
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
