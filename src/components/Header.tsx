import { usePerfil } from "../context/PerfilContext";

export const Header = () => {
  const { perfil, cambiarPerfil } = usePerfil();
  return (
    <header className="app-header">
      <div className="container">
        <div className="app-header__contenido">
          <div>
            <h1 className="app-header__titulo">Directorio de Colaboradores</h1>
          </div>

          <p className="app-header__descripcion">
            Gestiona tu equipo de trabajo de forma simple y rápida.
          </p>

          <div className="mt-3">
            <label
              htmlFor="perfil"
              className="form-label text-white fw-semibold"
            >
              Perfil activo
            </label>

            <select
              id="perfil"
              className="form-select"
              value={perfil}
              onChange={(event) => {
                const nuevoPerfil = event.target.value;

                if (
                  nuevoPerfil === "administrador" ||
                  nuevoPerfil === "vendedor" ||
                  nuevoPerfil === "consulta"
                ) {
                  cambiarPerfil(nuevoPerfil);
                }
              }}
            >
              <option value="administrador">Administrador</option>
              <option value="vendedor">Vendedor</option>
              <option value="consulta">Consulta</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
