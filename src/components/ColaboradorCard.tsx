import type { Colaborador } from "../types/Colaborador";

import avatarMasculino from "../assets/img/avatar_masculino.png";
import avatarFemenino from "../assets/img/avatar_femenino.png";

export const ColaboradorCard = ({
  nombre,
  departamento,
  genero,
}: Colaborador) => {
  const avatar = genero === "masculino" ? avatarMasculino : avatarFemenino;

  return (
    <article className="colaborador-card">
      <div className="colaborador-card__info">
        <img src={avatar} alt="" className="colaborador-card__avatar" />

        <div>
          <h3 className="colaborador-card__nombre">{nombre}</h3>

          <span className="colaborador-card__departamento">{departamento}</span>
        </div>
      </div>

      <div className="colaborador-card__acciones">
        <button type="button" className="btn btn-outline-primary">
          Editar
        </button>

        <button type="button" className="btn btn-outline-danger">
          Eliminar
        </button>
      </div>
    </article>
  );
};
