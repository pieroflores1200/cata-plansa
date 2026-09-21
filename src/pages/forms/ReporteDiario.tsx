// src/pages/forms/ReporteDiario.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function ReporteDiario() {
  const [form, setForm] = useState({ fecha: "", visitasRealizadas: "", pedidosLevantados: "", comentarios: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("reporte-diario", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Reporte diario guardado ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Fecha</label>
      <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} required />
      <label>Visitas realizadas</label>
      <input type="number" value={form.visitasRealizadas} onChange={(e) => setForm({ ...form, visitasRealizadas: e.target.value })} required />
      <label>Pedidos levantados</label>
      <input type="number" value={form.pedidosLevantados} onChange={(e) => setForm({ ...form, pedidosLevantados: e.target.value })} required />
      <label>Comentarios</label>
      <textarea value={form.comentarios} onChange={(e) => setForm({ ...form, comentarios: e.target.value })} />
      <button type="submit">Guardar reporte</button>
    </form>
  );
}