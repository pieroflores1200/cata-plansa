// src/components/PdfViewer.tsx
interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  return (
    <iframe
      src={url}
      title="Documento PDF"
      className="pdf-viewer-iframe"
    />
  );
}