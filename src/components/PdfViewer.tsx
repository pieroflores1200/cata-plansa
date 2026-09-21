// src/components/PdfViewer.tsx
import { useEffect, useState } from "react";

interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  const [estado, setEstado] = useState<"cargando" | "disponible" | "no-disponible">("cargando");

  useEffect(() => {
    setEstado("cargando");
    fetch(url, { method: "HEAD" })
      .then((res) => setEstado(res.ok ? "disponible" : "no-disponible"))
      .catch(() => setEstado("no-disponible"));
  }, [url]);

  if (estado === "cargando") {
    return <div className="pdf-viewer-mensaje">Cargando documento...</div>;
  }

  if (estado === "no-disponible") {
    return (
      <div className="pdf-viewer-mensaje">
        📄 Este catálogo aún no está disponible.<br />
        Vuelve a intentarlo más tarde.
      </div>
    );
  }

  return (
    <iframe
      src={url}
      title="Documento PDF"
      className="pdf-viewer-iframe"
    />
  );
}