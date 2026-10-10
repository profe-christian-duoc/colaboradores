import type { Colaborador } from "../types/Colaborador";
import { ColaboradorCard } from "./ColaboradorCard";

interface ColaboradoresListaProps {
  colaboradores: Colaborador[];
  onEliminar: (id: Number) => void;
}
export const ColaboradoresLista = ({
  colaboradores,
  onEliminar,
}: ColaboradoresListaProps) => {
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
              onEliminar={onEliminar}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
