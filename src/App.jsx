import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

export default function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

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

  // 🔹 Lista de páginas con o sin imagen
  const pages = [
    { section: 1, label: "Section 1", hasImage: true },
    { section: 2, label: "Section 2", hasImage: true },
    { section: 3, label: "Section 3", hasImage: true },
  ];

  return (
    <div>
      <Header ref={headerRef} options={pages} />

      {pages.map(({ section, hasImage }) => (
        <Page key={section} headerHeight={section === 1 ? headerHeight : 0}>
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
          <Footer {...footerProps} />
        </Page>
      ))}
    </div>
  );
}
