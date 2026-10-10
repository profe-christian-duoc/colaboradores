import { createContext, useContext, useState, type ReactNode } from "react";
import { ColaboradorForm } from "./components/ColaboradorForm";
import { ColaboradoresLista } from "./components/ColaboradoresLista";
import { Filtros } from "./components/Filtros";
import { Header } from "./components/Header";
import type { Colaborador } from "./types/Colaborador";
import { colaboradores } from "./data/colaboradores";

type Perfil = "administrador" | "vendedor" | "consulta";

interface PerfilContextType {
  perfil: Perfil;
  cambiarPerfil: (nuevoPerfil: Perfil) => void;
}

const PerfilContext = createContext<PerfilContextType | null>(null);

function App() {
  const [listaColaboradores, setListaColaboradores] =
    useState<Colaborador[]>(colaboradores);

  const registrarColaborador = (nuevoColaborador: Colaborador) => {
    setListaColaboradores((listaActual) => [...listaActual, nuevoColaborador]);
  };

  const eliminarColaborador = (id: Number) => {
    setListaColaboradores((listaActual) =>
      listaActual.filter((colaborador) => colaborador.id !== id),
    );
  };
  return (
    <>
      <Header />
      <main className="container py-4 py-lg-5">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-4">
            <ColaboradorForm onRegistrar={registrarColaborador} />
          </div>

          <div className="col-12 col-lg-8">
            <Filtros />
            <ColaboradoresLista
              colaboradores={listaColaboradores}
              onEliminar={eliminarColaborador}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
