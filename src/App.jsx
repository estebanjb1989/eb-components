import { useRef, useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // 🔹 Lista de páginas con o sin imagen
  const pages = [
    { section: 1, label: "Section 1", hasImage: true },
    { section: 2, label: "Section 2", hasImage: true },
    { section: 3, label: "Section 3", hasImage: true },
  ];

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

  // 🔹 Props del footer
  const footerProps = {
    text: "© 2025 AguaDulce Import. Todos los derechos reservados.",
    links: [
      { label: "Instagram", href: "https://instagram.com/aguadulceimport" },
      { label: "Tienda", href: "https://aguadulceimport.com" },
      { label: "Contacto", href: "#contact" },
    ],
    backgroundColor: "#0a0a0a",
    textColor: "#f0f0f0",
  };

  const handleScrollTo = useCallback(
    (index) => {
      const ref = sectionRefs.current[index];
      if (ref?.current) {
        const top = ref.current.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [] // 👈 ya no depende del headerHeight
  );


  return (
    <div>
      <Header
        ref={headerRef}
        options={pages.map((p, i) => ({
          label: p.label,
          onClick: () => handleScrollTo(i),
        }))}
      />
      <div>
        {pages.map(({ section, hasImage }, i) => (
          <Page
            key={section}
            ref={sectionRefs.current[i]}
            headerHeight={headerHeight}

          >

            {/* Si la página tiene imagen */}
            {hasImage && (
              <img
                src={`https://placehold.co/1200x397?text=Section+${section}&font=montserrat`}
                alt={`Section ${section}`}
                style={{
                  width: "100%",
                  maxHeight: "397px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}

            {/* 🔹 Contenedor del contenido central */}
            {/* 🔹 Contenedor del contenido central */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "2rem 0",
                boxSizing: "border-box",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
              </p>
            </div>
            <Footer {...footerProps} />
          </Page>
        ))}
      </div>
    </div>
  );
}
