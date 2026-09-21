// src/components/PdfViewer.tsx
interface PdfViewerProps {
  url: string;
}

export default function PdfViewer({ url }: PdfViewerProps) {
  return (
    <iframe
      src={url}
      title="Documento PDF"
      style={{ width: "100%", height: "70vh", border: "none" }}
    />
  );
}