// src/pages/forms/ClientesNuevos.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function ClientesNuevos() {
  const [form, setForm] = useState({ nombreEmpresa: "", contacto: "", telefono: "", sector: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("clientes-nuevos", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Cliente potencial registrado ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Nombre de la empresa</label>
      <input value={form.nombreEmpresa} onChange={(e) => setForm({ ...form, nombreEmpresa: e.target.value })} required />
      <label>Contacto</label>
      <input value={form.contacto} onChange={(e) => setForm({ ...form, contacto: e.target.value })} required />
      <label>Teléfono</label>
      <input value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} required />
      <label>Sector</label>
      <input value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} required />
      <button type="submit">Registrar cliente</button>
    </form>
  );
}