// src/pages/SellerPortal.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../hooks/useModal";
import { toolItems } from "../data/toolItems";
import ToolCard from "../components/ToolCard";
import Modal from "../components/Modal";

import RegistrarVisita from "./forms/RegistrarVisita";
import SolicitudMuestras from "./forms/SolicitudMuestras";
import ReporteDiario from "./forms/ReporteDiario";
import Encuesta from "./forms/Encuesta";
import Pedidos from "./forms/Pedidos";
import ClientesNuevos from "./forms/CLientesNuevos";
import Seguimiento from "./forms/Seguimiento";

const formularios: Record<string, React.ReactNode> = {
  visita: <RegistrarVisita />,
  muestras: <SolicitudMuestras />,
  reporte: <ReporteDiario />,
  encuesta: <Encuesta />,
  pedidos: <Pedidos />,
  clientes: <ClientesNuevos />,
  seguimiento: <Seguimiento />,
};

export default function SellerPortal() {
  const { vendedorAutenticado } = useAuth();
  const { activo, abrir, cerrar } = useModal();

  if (!vendedorAutenticado) return <Navigate to="/vendedor" replace />;

  const toolActiva = toolItems.find((t) => t.id === activo);

  return (
    <div className="portal-page">
      <h2 className="portal-title"><span className="portal-title-icon">👤</span> Portal del Vendedor</h2>
      <p>Selecciona una herramienta para comenzar. Cada tarjeta abre un formulario.</p>
      <div className="tool-grid">
        {toolItems.map((t) => (
          <ToolCard key={t.id} icon={t.icon} titulo={t.titulo} descripcion={t.descripcion} onClick={() => abrir(t.id)} />
        ))}
      </div>
      {toolActiva && (
        <Modal titulo={toolActiva.titulo} onClose={cerrar}>
          {formularios[toolActiva.id]}
        </Modal>
      )}
    </div>
  );
}