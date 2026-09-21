// src/components/ToolIcon.tsx
const paths: Record<string, string> = {
  visita:
    "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  muestras:
    "M9 3v2h1v11.5a3.5 3.5 0 1 0 4 0V5h1V3H9zm3 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-6h-2V5h2v7z",
  reporte:
    "M3 3v18h18v-2H5V3H3zm4 14h2v-6H7v6zm4 0h2V7h-2v10zm4 0h2v-9h-2v9z",
  encuesta:
    "M19 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 9h10v2H7V9zm0 4h7v2H7v-2z",
  pedidos:
    "M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44c-.16.28-.25.61-.25.97 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z",
  clientes:
    "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  seguimiento:
    "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM7 11h10v2H7zm0 4h10v2H7zm0-8h10v2H7z",
};

export default function ToolIcon({ name }: { name: string }) {
  const d = paths[name] ?? paths.reporte;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d={d} />
    </svg>
  );
}