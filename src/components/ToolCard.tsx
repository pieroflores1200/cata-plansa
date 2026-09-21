// src/components/ToolCard.tsx
import ToolIcon from "./ToolIcon";

interface ToolCardProps {
  icon: string;
  titulo: string;
  descripcion: string;
  onClick: () => void;
}

export default function ToolCard({ icon, titulo, descripcion, onClick }: ToolCardProps) {
  return (
    <div className="tool-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="tool-icon-box">
        <ToolIcon name={icon} />
      </div>
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
      <span className="tool-card-link">Abrir formulario →</span>
    </div>
  );
}