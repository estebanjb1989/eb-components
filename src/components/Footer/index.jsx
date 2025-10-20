import React from "react";
import "./Footer.css";

/**
 * Footer component
 *
 * @param {object} props
 * @param {string} [props.text] - Texto principal del footer (default)
 * @param {Array<{ label: string, href?: string, onClick?: Function }>} [props.links] - Lista opcional de links
 * @param {string} [props.backgroundColor] - Color de fondo (por defecto oscuro)
 * @param {string} [props.textColor] - Color del texto
 */
export default function Footer({
  text = "© 2025 Mi Empresa. Todos los derechos reservados.",
  links = [
    { label: "Privacidad", href: "#privacy" },
    { label: "Términos", href: "#terms" },
    { label: "Contacto", href: "#contact" },
  ],
  backgroundColor = "#111",
  textColor = "#fff",
}) {
  return (
    <footer className="Footer" style={{ backgroundColor, color: textColor }}>
      <div className="Footer-content">
        <p className="Footer-text">{text}</p>

        {links?.length > 0 && (
          <nav className="Footer-nav">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href || "#"}
                onClick={link.onClick}
                className="Footer-link"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
