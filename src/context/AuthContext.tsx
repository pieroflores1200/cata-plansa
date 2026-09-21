// src/context/AuthContext.tsx
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  vendedorAutenticado: boolean;
  ingresar: () => void;
  salir: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [vendedorAutenticado, setVendedorAutenticado] = useState(false);
  const ingresar = () => setVendedorAutenticado(true);
  const salir = () => setVendedorAutenticado(false);

  return (
    <AuthContext.Provider value={{ vendedorAutenticado, ingresar, salir }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
}