// src/data/catalogItems.ts
export interface CatalogItem {
  id: string;
  icon: string;
  titulo: string;
  descripcion: string;
  urlPdf: string;
}

export const catalogItems: CatalogItem[] = [
  { id: "industrial", icon: "industrial", titulo: "Catálogo Industrial", descripcion: "Envases y soluciones plásticas para uso industrial.", urlPdf: "/pdfs/catalogo-industrial.pdf" },
  { id: "farmaceutico", icon: "farmaceutico", titulo: "Catálogo Farmacéutico", descripcion: "Envases certificados para la industria farmacéutica.", urlPdf: "/pdfs/catalogo-farmaceutico.pdf" },
  { id: "cosmetico", icon: "cosmetico", titulo: "Catálogo Cosmético", descripcion: "Envases de alta calidad para productos de belleza y cuidado personal.", urlPdf: "/pdfs/catalogo-cosmetico.pdf" },
  { id: "alimenticio", icon: "alimenticio", titulo: "Catálogo Alimenticio", descripcion: "Envases aptos para contacto con alimentos.", urlPdf: "/pdfs/catalogo-alimenticio.pdf" },
  { id: "agroindustrial", icon: "agroindustrial", titulo: "Catálogo Agroindustrial", descripcion: "Soluciones plásticas para el sector agroindustrial.", urlPdf: "/pdfs/catalogo-agroindustrial.pdf" },
  { id: "certificaciones", icon: "certificaciones", titulo: "Certificaciones", descripcion: "Certificados de calidad y cumplimiento normativo.", urlPdf: "/pdfs/certificaciones.pdf" },
  { id: "brochure", icon: "brochure", titulo: "Brochure Corporativo", descripcion: "Conoce más sobre nuestra empresa y nuestros valores.", urlPdf: "/pdfs/brochure-corporativo.pdf" },
];