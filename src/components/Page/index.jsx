import React, { forwardRef } from "react";
import "./Page.css";

const Page = forwardRef(({ children, className = "", style = {}, headerHeight = 0, index = 0 }, ref) => {
  return (
    <section
      ref={ref}
      className={`Page ${className}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        minHeight: `calc(100vh - ${index === 0 ? 0 : headerHeight}px)`, // 👈 ocupa todo el alto útil visible
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </section>
  );
});

export default Page;
