// src/pages/forms/Seguimiento.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function Seguimiento() {
  const [form, setForm] = useState({ cliente: "", estado: "en negociación", proximaAccion: "", fecha: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("seguimiento", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Seguimiento guardado ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Cliente</label>
      <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <label>Estado</label>
      <select value={form.estado} onChange={(e) => setForm({ ...form, estado: e.target.value })}>
        <option value="en negociación">En negociación</option>
        <option value="pendiente de pago">Pendiente de pago</option>
        <option value="cerrado">Cerrado</option>
      </select>
      <label>Próxima acción</label>
      <input value={form.proximaAccion} onChange={(e) => setForm({ ...form, proximaAccion: e.target.value })} required />
      <label>Fecha</label>
      <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} required />
      <button type="submit">Guardar seguimiento</button>
    </form>
  );
}