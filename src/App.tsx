import { ColaboradorForm } from "./components/ColaboradorForm";
import { ColaboradoresLista } from "./components/ColaboradoresLista";
import { Filtros } from "./components/Filtros";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <main className="container py-4 py-lg-5">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-4">
            <ColaboradorForm />
          </div>

          <div className="col-12 col-lg-8">
            <Filtros />
            <ColaboradoresLista />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
