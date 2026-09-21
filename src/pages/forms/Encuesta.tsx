// src/pages/forms/Encuesta.tsx
import { useState, type FormEvent } from "react";
import { enviarFormulario } from "../../services/api";

export default function Encuesta() {
  const [form, setForm] = useState({ cliente: "", medioEnvio: "whatsapp", contacto: "" });
  const [enviado, setEnviado] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await enviarFormulario("encuesta", form);
    setEnviado(true);
  }

  if (enviado) return <p className="success-text">Encuesta enviada al cliente ✅</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Cliente</label>
      <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} required />
      <label>Medio de envío</label>
      <select value={form.medioEnvio} onChange={(e) => setForm({ ...form, medioEnvio: e.target.value })}>
        <option value="whatsapp">WhatsApp</option>
        <option value="email">Correo</option>
      </select>
      <label>Contacto (número o correo)</label>
      <input value={form.contacto} onChange={(e) => setForm({ ...form, contacto: e.target.value })} required />
      <button type="submit">Enviar encuesta</button>
    </form>
  );
}