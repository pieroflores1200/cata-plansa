// src/hooks/useModal.ts
import { useState } from "react";

export function useModal() {
  const [activo, setActivo] = useState<string | null>(null);
  const abrir = (id: string) => setActivo(id);
  const cerrar = () => setActivo(null);
  return { activo, abrir, cerrar };
}