import { createContext, useContext, useState, type ReactNode } from "react";

type Perfil = "administrador" | "vendedor" | "consulta";

interface PerfilContextType {
  perfil: Perfil;
  cambiarPerfil: (nuevoPerfil: Perfil) => void;
}

const PerfilContext = createContext<PerfilContextType | null>(null);

export const PerfilProvider = ({ children }: { children: ReactNode }) => {
  const [perfil, setPerfil] = useState<Perfil>("administrador");

  return (
    <PerfilContext value={{ perfil, cambiarPerfil: setPerfil }}>
      {children}
    </PerfilContext>
  );
};

export const usePerfil = () => {
  const contexto = useContext(PerfilContext);

  if (contexto === null) {
    throw new Error("usePerfil requiere PerfilProvider");
  }

  return contexto;
};
