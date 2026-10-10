import type { Colaborador } from "../types/Colaborador";

import avatarMasculino from "../assets/img/avatar_masculino.png";
import avatarFemenino from "../assets/img/avatar_femenino.png";
import { usePerfil } from "../context/PerfilContext";

interface ColaboradorCardProps extends Colaborador {
  onEliminar: (id: Number) => void;
}

export const ColaboradorCard = ({
  id,
  nombre,
  departamento,
  genero,
  onEliminar,
}: ColaboradorCardProps) => {
  const avatar = genero === "masculino" ? avatarMasculino : avatarFemenino;

  const { perfil } = usePerfil();
  const puedeAdministrar = () => {
    return perfil === "administrador";
  };
  return (
    <article className="colaborador-card">
      <div className="colaborador-card__info">
        <img src={avatar} alt="" className="colaborador-card__avatar" />

        <div>
          <h3 className="colaborador-card__nombre">{nombre}</h3>

          <span className="colaborador-card__departamento">{departamento}</span>
        </div>
      </div>

      {puedeAdministrar() && (
        <div className="colaborador-card__acciones">
          <button type="button" className="btn btn-outline-primary">
            Editar
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => onEliminar(id)}
          >
            Eliminar
          </button>
        </div>
      )}
    </article>
  );
};
