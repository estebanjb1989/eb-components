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
  children,
  backgroundColor = "#111",
  textColor = "#fff",
}) {
  return (
    <footer className="Footer" style={{ backgroundColor, color: textColor }}>
      <div className="Footer-content">
        {children}
      </div>
    </footer>
  );
}
