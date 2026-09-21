// src/pages/ClientPortal.tsx
import { useModal } from "../hooks/useModal";
import { catalogItems } from "../data/catalogItems";
import CatalogCard from "../components/CatalogCard";
import Modal from "../components/Modal";
import PdfViewer from "../components/PdfViewer";

export default function ClientPortal() {
  const { activo, abrir, cerrar } = useModal();
  const catalogoActivo = catalogItems.find((c) => c.id === activo);

  return (
    <div className="portal-page">
      <h2 className="portal-title"><span className="portal-title-icon">👥</span> Portal del Cliente</h2>
      <p>Consulta nuestros catálogos, certificaciones y material corporativo en PDF.</p>
      <div className="tool-grid">
        {catalogItems.map((c) => (
          <CatalogCard key={c.id} icon={c.icon} titulo={c.titulo} descripcion={c.descripcion} onClick={() => abrir(c.id)} />
        ))}
      </div>
      {catalogoActivo && (
  <Modal titulo={catalogoActivo.titulo} onClose={cerrar} ancho="grande">
    <PdfViewer url={catalogoActivo.urlPdf} />
  </Modal>
)}
    </div>
  );
}