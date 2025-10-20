import React from "react";
import "./Page.css";

/**
 * Page component
 * Ocupa todo el alto visible (menos el header, si se pasa headerHeight)
 */
export default function Page({
  children,
  className = "",
  style = {},
  headerHeight = 0,
}) {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <section
      className={`Page ${className}`}
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`, // 👈 evita que el header tape el contenido
        ...style,
      }}
    >
      {hasChildren ? children : <div className="Page-placeholder">Page</div>}
    </section>
  );
}
