// src/components/CatalogCard.tsx
import CatalogIcon from "./CatalogIcon";

interface CatalogCardProps {
  icon: string;
  titulo: string;
  descripcion: string;
  onClick: () => void;
}

export default function CatalogCard({ icon, titulo, descripcion, onClick }: CatalogCardProps) {
  return (
    <div className="tool-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="tool-icon-box">
        <CatalogIcon name={icon} />
      </div>
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
      <span className="tool-card-link">Ver PDF ↗</span>
    </div>
  );
}