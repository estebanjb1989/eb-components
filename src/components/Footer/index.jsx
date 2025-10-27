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
  foreColor = "#111",
  backgroundColor = "grey",
  textColor = "#fff",
  fontSize = 18,
  fontWeight = 500,
}) {
  return (
    <footer className="Footer" style={{
      backgroundColor,
      color: textColor,
      fontSize,
      fontWeight
    }}>
      <div className="Footer-content" style={{
        color: foreColor
      }}>
        {children}
      </div>
    </footer>
  );
}
