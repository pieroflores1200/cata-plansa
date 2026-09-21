// src/pages/forms/RegistrarVisita.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function RegistrarVisita() {
  const [form, setForm] = useState({ cliente: "", fecha: "", ubicacion: "", notas: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("registrar-visita", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Visita registrada correctamente ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Cliente</label>
      <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <label>Fecha</label>
      <input type="date" value={form.fecha} onChange={(e) => setForm({ ...form, fecha: e.target.value })} required />
      <label>Ubicación</label>
      <input value={form.ubicacion} onChange={(e) => setForm({ ...form, ubicacion: e.target.value })} required />
      <label>Notas</label>
      <textarea value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} />
      <button type="submit">Guardar visita</button>
    </form>
  );
}