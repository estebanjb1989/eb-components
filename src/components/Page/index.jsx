import React from "react";
import "./Page.css";

/**
 * Page component
 * Ocupa todo el alto visible (100vh) y muestra su contenido centrado o libre.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Contenido a renderizar dentro de la página
 * @param {string} [props.className] - Clases CSS adicionales
 * @param {object} [props.style] - Estilos en línea opcionales
 */
export default function Page({ children, className = "", style = {} }) {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <section
      className={`Page ${className}`}
      style={{ height: "100vh", ...style }}
    >
      {hasChildren ? (
        children
      ) : (
        <div className="Page-placeholder">Page</div>
      )}
    </section>
  );
}
