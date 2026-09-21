// src/services/api.ts
const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api";
const NOMBRE_KEY = "plansa_vendedor_nombre";

export async function validarPasswordVendedor(password: string, nombre: string): Promise<{ ok: boolean; mensaje?: string }> {
    try {
        const res = await fetch(`${BASE_URL}/auth/vendedor`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password, nombre }),
        });
        const data = await res.json();
        if (data.ok) {
            localStorage.setItem(NOMBRE_KEY, nombre);
        }
        return data;
    } catch (error) {
        console.error("Error conectando con el backend:", error);
        return { ok: false, mensaje: "No se pudo conectar con el servidor." };
    }
}

export async function enviarFormulario(tipo: string, datos: Record<string, unknown>) {
    try {
        const vendedor = localStorage.getItem(NOMBRE_KEY) || "No identificado";
        const res = await fetch(`${BASE_URL}/formularios/${tipo}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...datos, vendedor }),
        });
        if (!res.ok) throw new Error("Error al enviar el formulario");
        return await res.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function loginAdmin(password: string): Promise<{ ok: boolean; mensaje?: string }> {
    try {
        const res = await fetch(`${BASE_URL}/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });
        const data = await res.json();
        if (data.ok) {
            sessionStorage.setItem("plansa_admin_password", password);
        }
        return data;
    } catch (error) {
        return { ok: false, mensaje: "No se pudo conectar con el servidor." };
    }
}

export async function obtenerFormularios(filtros: { tipo?: string; desde?: string; hasta?: string } = {}) {
    const password = sessionStorage.getItem("plansa_admin_password");
    const params = new URLSearchParams();
    if (filtros.tipo) params.set("tipo", filtros.tipo);
    if (filtros.desde) params.set("desde", filtros.desde);
    if (filtros.hasta) params.set("hasta", filtros.hasta);

    const res = await fetch(`${BASE_URL}/admin/formularios?${params}`, {
        headers: { "x-admin-password": password || "" },
    });
    if (!res.ok) throw new Error("No autorizado o error del servidor");
    return res.json();
}