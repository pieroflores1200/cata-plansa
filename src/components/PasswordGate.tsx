// src/components/PasswordGate.tsx
import { useState, type FormEvent } from "react";
import { validarPasswordVendedor } from "../services/api";

interface PasswordGateProps {
  onSuccess: () => void;
}

export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setCargando(true);
    const valido = await validarPasswordVendedor(password);
    setCargando(false);
    if (valido) onSuccess();
    else setError("Contraseña incorrecta.");
  }

  return (
    <div className="password-gate">
      <img src="/logo-plansa.png" alt="PLANSA Logo" className="password-logo" />
      <div className="password-icon">
        <svg viewBox="0 0 24 24" className="password-icon-svg">
          <path d="M12 1a5 5 0 0 0-5 5v3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2V6a5 5 0 0 0-5-5zm-3 8V6a3 3 0 0 1 6 0v3H9zm3 4a2 2 0 0 1 1 3.73V18a1 1 0 0 1-2 0v-1.27A2 2 0 0 1 12 13z" />
        </svg>
      </div>
      <h2>Acceso Vendedores</h2>
      <p>Ingresa la contraseña para entrar al portal del vendedor.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-text">{error}</p>}
        <button type="submit" disabled={cargando}>
          {cargando ? "Verificando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}