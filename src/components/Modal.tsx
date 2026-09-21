// src/components/Modal.tsx
import type { ReactNode } from "react";
import "../styles/modal.css";

interface ModalProps {
  titulo: string;
  onClose: () => void;
  children: ReactNode;
  ancho?: "normal" | "grande";
}

export default function Modal({ titulo, onClose, children, ancho = "normal" }: ModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-content ${ancho === "grande" ? "modal-content-grande" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3>{titulo}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>
        <div className={`modal-body ${ancho === "grande" ? "modal-body-grande" : ""}`}>{children}</div>
      </div>
    </div>
  );
}