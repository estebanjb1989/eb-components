import { useEffect, useState } from "react";
import "./Header.css";

/**
 * Header component
 *
 * @param {object} props
 * @param {React.RefObject} page1Ref - referencia a la primera sección
 * @param {object} [assets] - objeto opcional con las imágenes personalizadas
 * @param {string} [assets.banner] - imagen cuando el header está sticky
 * @param {string} [assets.logo] - imagen cuando el header no está sticky
 */
export default function Header({ page1Ref, assets = {} }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!page1Ref?.current) return;
      const bottom = page1Ref.current.getBoundingClientRect().bottom;
      setIsSticky(bottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page1Ref]);

  // ✅ Usa props si existen, si no usa placehold.co
  const logoSrc = isSticky
    ? assets.banner || "https://placehold.co/400x100?text=Banner+Sticky&font=montserrat"
    : assets.logo || "https://placehold.co/150x80?text=Logo+Default&font=montserrat";

  return (
    <header className={`App-header ${isSticky ? "sticky white-bg" : ""}`}>
      <img
        src={logoSrc}
        className={`App-logo ${isSticky ? "logo-banner" : "logo-small"}`}
        alt="Header logo"
      />
    </header>
  );
}
