// src/pages/Home.tsx
import { useNavigate } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <img src="/logo-plansa.png" alt="PLANSA Logo" className="home-logo" />
      <h1>Plásticos Nacionales S.A.</h1>
      <p className="home-subtitle">Selecciona tu perfil para continuar al portal correspondiente.</p>

      <div className="profile-grid">
        <ProfileCard tipo="vendedor" titulo="Vendedor" descripcion="Registro de visitas, pedidos, reportes y más herramientas comerciales." onClick={() => navigate("/vendedor")} />
        <ProfileCard tipo="cliente" titulo="Cliente" descripcion="Catálogos de producto, certificaciones y material corporativo." onClick={() => navigate("/cliente")} />
      </div>
    </div>
  );
}