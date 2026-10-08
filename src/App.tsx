import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { ColaboradorForm } from "./components/ColaboradorForm";
import { Filtros } from "./components/Filtros";
import { ColaboradoresLista } from "./components/ColaboradoresLista";
import { useState } from "react";
import type { Colaborador } from "./types/Colaborador";
import { colaboradores } from "./data/colaboradores";

function App() {
  const [listaColaboradores, setListaColaboradores] =
    useState<Colaborador[]>(colaboradores);
  const registrarColaborador = (nuevoColaborar: Colaborador) => {
    setListaColaboradores([...listaColaboradores, nuevoColaborar]);
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
            <ColaboradoresLista colaboradores={listaColaboradores} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
