// src/pages/forms/Pedidos.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function Pedidos() {
  const [form, setForm] = useState({ cliente: "", producto: "", cantidad: "", fechaEntrega: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("pedidos", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Pedido enviado a producción ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Cliente</label>
      <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <label>Producto</label>
      <input value={form.producto} onChange={(e) => setForm({ ...form, producto: e.target.value })} required />
      <label>Cantidad</label>
      <input type="number" value={form.cantidad} onChange={(e) => setForm({ ...form, cantidad: e.target.value })} required />
      <label>Fecha de entrega</label>
      <input type="date" value={form.fechaEntrega} onChange={(e) => setForm({ ...form, fechaEntrega: e.target.value })} required />
      <button type="submit">Levantar pedido</button>
    </form>
  );
}