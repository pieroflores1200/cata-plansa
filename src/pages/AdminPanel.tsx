// src/pages/AdminPanel.tsx
import { useEffect, useState } from "react";
import { obtenerFormularios } from "../services/api";

interface Formulario {
  id: number;
  tipo: string;
  vendedor: string;
  datos: Record<string, unknown>;
  creado_en: string;
}

export default function AdminPanel() {
  const [formularios, setFormularios] = useState<Formulario[]>([]);
  const [tipo, setTipo] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  async function cargar() {
    setCargando(true);
    setError("");
    try {
      const data = await obtenerFormularios(tipo ? { tipo } : {});
      setFormularios(data);
    } catch {
      setError("No autorizado o error de conexión. Vuelve a iniciar sesión.");
    }
    setCargando(false);
  }

  useEffect(() => {
    cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="portal-page">
      <h2 className="portal-title">📊 Panel de Formularios</h2>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "24px", flexWrap: "wrap" }}>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Todos los tipos</option>
          <option value="registrar-visita">Registrar visita</option>
          <option value="solicitud-muestras">Solicitud de muestras</option>
          <option value="reporte-diario">Reporte diario</option>
          <option value="encuesta">Encuesta</option>
          <option value="pedidos">Pedidos</option>
          <option value="clientes-nuevos">Clientes nuevos</option>
          <option value="seguimiento">Seguimiento</option>
        </select>
        <button onClick={cargar}>Filtrar</button>
      </div>

      {cargando && <p>Cargando...</p>}
      {error && <p className="error-text">{error}</p>}

      {!cargando && !error && (
        <div style={{ overflowX: "auto", maxWidth: "1100px", margin: "0 auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "13px" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #eee" }}>
                <th style={{ padding: "8px" }}>Fecha</th>
                <th style={{ padding: "8px" }}>Tipo</th>
                <th style={{ padding: "8px" }}>Vendedor</th>
                <th style={{ padding: "8px" }}>Datos</th>
              </tr>
            </thead>
            <tbody>
              {formularios.map((f) => (
                <tr key={f.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "8px", whiteSpace: "nowrap" }}>{new Date(f.creado_en).toLocaleString()}</td>
                  <td style={{ padding: "8px" }}>{f.tipo}</td>
                  <td style={{ padding: "8px" }}>{f.vendedor}</td>
                  <td style={{ padding: "8px" }}>
                    {Object.entries(f.datos).map(([k, v]) => (
                      <div key={k}><strong>{k}:</strong> {String(v)}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {formularios.length === 0 && <p style={{ textAlign: "center", color: "#6b7280" }}>No hay formularios registrados.</p>}
        </div>
      )}
    </div>
  );
}