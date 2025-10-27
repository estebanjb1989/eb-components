import React, { useRef, useState, useEffect, useCallback } from "react";
import Header from "../Header";
import Page from "../Page";
import Footer from "../Footer";

export default function LandingPage({
  pages = [],
  headerProps = {},
}) {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // 🔹 Refs dinámicos para cada sección
  const sectionRefs = useRef(pages.map(() => React.createRef()));

  // 🔹 Calcular altura del header
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // 🔹 Scroll suave con compensación del header
  const handleScrollTo = useCallback(
    (index) => {
      const ref = sectionRefs.current[index];
      if (ref?.current) {
        const top =
          ref.current.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [headerHeight]
  );

  return (
    <div className="LandingPage">
      {/* ===== HEADER ===== */}
      <Header
        ref={headerRef}
        options={pages.map((p, i) => ({
          label: p.label,
          onClick: () => handleScrollTo(i),
        }))}
        {...headerProps}
      />

      {/* ===== SECCIONES ===== */}
      <main>
        {pages.map((page, i) => (
          <Page
            key={page.section}
            ref={sectionRefs.current[i]}
            headerHeight={headerHeight}
            index={i}
          >
            {/* Imagen + overlay opcional */}
            {page.image && (
              <div
                style={{
                  display: 'flex',
                  flex: 0,
                  position: "relative",
                  width: "100%",
                  marginTop: i === 0 ? headerHeight : 0,
                }}
              >
                <img
                  src={page.image}
                  alt={page.label}
                  style={{
                    width: "100%",
                    maxHeight: "397px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {page.overlayText && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                      textAlign: "center",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {page.overlayText}
                  </div>
                )}
              </div>
            )}

            {/* Contenido dinámico */}
            <div
              style={{
                display: "flex",
                flex: 0,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                boxSizing: "border-box",
              }}
            >
              {page.features}
            </div>

            {/* Footer individual */}
            {page.footer && (
              <Footer
                foreColor={page.footer.foreColor}
                backgroundColor={page.footer.backgroundColor}>
                
                {page.footer.content}
              </Footer>
            )}
          </Page>
        ))}
      </main>
    </div>
  );
}
