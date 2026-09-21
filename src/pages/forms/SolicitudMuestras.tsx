// src/pages/forms/SolicitudMuestras.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function SolicitudMuestras() {
  const [form, setForm] = useState({ cliente: "", producto: "", cantidad: "", direccionEnvio: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("solicitud-muestras", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Solicitud de muestras enviada ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Cliente</label>
      <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <label>Producto</label>
      <input value={form.producto} onChange={(e) => setForm({ ...form, producto: e.target.value })} required />
      <label>Cantidad</label>
      <input type="number" value={form.cantidad} onChange={(e) => setForm({ ...form, cantidad: e.target.value })} required />
      <label>Dirección de envío</label>
      <input value={form.direccionEnvio} onChange={(e) => setForm({ ...form, direccionEnvio: e.target.value })} required />
      <button type="submit">Solicitar muestras</button>
    </form>
  );
}