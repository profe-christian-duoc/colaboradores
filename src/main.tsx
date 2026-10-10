import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import App from "./App.tsx";
import { PerfilProvider } from "./context/PerfilContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PerfilProvider>
      <App />
    </PerfilProvider>
  </StrictMode>,
);
