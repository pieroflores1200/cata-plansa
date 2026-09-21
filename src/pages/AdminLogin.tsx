// src/pages/AdminLogin.tsx
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/api";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setCargando(true);
    const resultado = await loginAdmin(password);
    setCargando(false);
    if (resultado.ok) {
      navigate("/admin/panel");
    } else {
      setError(resultado.mensaje || "Contraseña incorrecta.");
    }
  }

  return (
    <div className="login-page">
      <div className="password-gate">
        <img src="/logo-plansa.png" alt="PLANSA Logo" className="password-logo" />
        <h2>Panel de Administración</h2>
        <p>Ingresa la contraseña de administrador.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-text">{error}</p>}
          <button type="submit" disabled={cargando}>
            {cargando ? "Verificando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}