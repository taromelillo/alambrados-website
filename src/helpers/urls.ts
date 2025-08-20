export const navLinks = ["inicio", "servicios", "sobre-nosotros", "contacto"];

export const links: Link[] = [
  { text: "Inicio", href: "inicio" },
  { text: "Servicios", href: "servicios" },
  { text: "Sobre nosotros", href: "sobre-nosotros" },
  { text: "Contacto", href: "contacto" },
];

interface Link {
  text: string;
  href: string;
}
