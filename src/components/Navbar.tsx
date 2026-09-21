// src/components/Navbar.tsx
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <img src="/logo-plansa.png" alt="PLANSA" className="navbar-logo" />
          <span className="navbar-brand-text">
            <span className="brand-dark">Plásticos</span>{" "}
            <span className="brand-green">Nacionales</span>
          </span>
        </div>

        <div className="navbar-links">
          <NavLink to="/vendedor" className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" className="nav-pill-icon">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            Vendedor
          </NavLink>

          <NavLink to="/cliente" className={({ isActive }) => `nav-pill ${isActive ? "active" : ""}`}>
            <svg viewBox="0 0 24 24" className="nav-pill-icon">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            Cliente
          </NavLink>
        </div>

        <button className="navbar-home" onClick={() => navigate("/")}>
          <svg viewBox="0 0 24 24" className="nav-pill-icon">
            <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z" />
          </svg>
          Inicio
        </button>
      </nav>
      <div className="navbar-line" />
    </div>
  );
}