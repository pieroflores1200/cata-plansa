// src/data/toolItems.ts
export interface ToolItem {
  id: string;
  icon: string;
  titulo: string;
  descripcion: string;
}

export const toolItems: ToolItem[] = [
  { id: "visita", icon: "visita", titulo: "Registrar visita", descripcion: "Documenta tu visita a cliente con fecha, ubicación y notas." },
  { id: "muestras", icon: "muestras", titulo: "Solicitud de muestras", descripcion: "Solicita muestras de producto para tus clientes." },
  { id: "reporte", icon: "reporte", titulo: "Reporte diario", descripcion: "Registra tus actividades y resultados del día." },
  { id: "encuesta", icon: "encuesta", titulo: "Encuesta", descripcion: "Comparte la encuesta de satisfacción con tu cliente." },
  { id: "pedidos", icon: "pedidos", titulo: "Pedidos", descripcion: "Levanta un nuevo pedido para procesarlo con producción." },
  { id: "clientes", icon: "clientes", titulo: "Clientes nuevos", descripcion: "Registra los datos de un cliente potencial nuevo." },
  { id: "seguimiento", icon: "seguimiento", titulo: "Seguimiento", descripcion: "Da seguimiento a negociaciones y pedidos en curso." },
];