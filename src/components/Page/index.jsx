import React, { forwardRef } from "react";
import "./Page.css";

/**
 * Page component
 * Ocupa todo el alto visible (100vh) y muestra su contenido centrado o libre.
 */
const Page = forwardRef(({ children, className = "", style = {}, headerHeight = 0 }, ref) => {
  const hasChildren = React.Children.count(children) > 0;

  return (
    <section
      ref={ref}
      className={`Page ${className}`}
      style={{
        minHeight: `100vh`,

        ...style,
      }}
    >
      {hasChildren ? children : <div className="Page-placeholder">Page</div>}
    </section>
  );
});

export default Page;
