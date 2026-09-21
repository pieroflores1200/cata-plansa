const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000/api";

export async function validarPasswordVendedor(password: string): Promise<boolean> {
    try {
        const res = await fetch(`${BASE_URL}/auth/vendedor`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });
        
        if (!res.ok) return false;
        return await res.json(); // Espera true o false desde el backend
    } catch (error) {
        console.error("Error conectando con el backend:", error);
        return false;
    }
}

export async function enviarFormulario(tipo: string, datos: Record<string, unknown>) {
    try {
        const res = await fetch(`${BASE_URL}/formularios/${tipo}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
        });

        if (!res.ok) throw new Error("Error al enviar el formulario");
        
        return await res.json();
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}