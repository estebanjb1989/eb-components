import { useEffect, useState, forwardRef } from "react";
import "./Header.css";

const Header = forwardRef(({
  page1Ref,
  assets = {},
  backgroundColor = "whitesmoke",
  padding = "2rem 4rem",
  hamburgerSize = 48,
  fontSize = "1rem",
  uppercase = false, // ✅ valor booleano
  color = "grey",
  selectedColor = "darkblue",
  options = [
    { label: "Inicio", href: "#home" },
    { label: "Productos", href: "#products" },
    { label: "Contacto", href: "#contact" },
  ],
}, ref) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!page1Ref?.current) return;
      const bottom = page1Ref.current.getBoundingClientRect().bottom;
      setIsSticky(bottom <= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page1Ref]);

  const logoSrc = isSticky
    ? assets.banner || "https://placehold.co/400x100?text=Banner+Sticky&font=montserrat"
    : assets.logo || "https://placehold.co/150x80?text=Logo+Default&font=montserrat";

  return (
    <header
      ref={ref}
      className={`App-header ${isSticky ? "sticky" : ""}`}
      style={{ backgroundColor, padding }}
    >
      <img
        src={logoSrc}
        className={`App-logo ${isSticky ? "logo-banner" : "logo-small"}`}
        alt="Header logo"
      />

      <div className="Header-right">
        <nav
          className={`Header-nav ${menuOpen ? "open" : ""}`}
          style={{
            fontSize,
            textTransform: uppercase ? "uppercase" : "none",
          }}
        >
          {options.map((opt, i) => (
            <a
              key={i}
              href={opt.href || "#"}
              onClick={(e) => {
                e.preventDefault(); // 👈 evita el salto instantáneo
                setSelectedIndex(i);
                setMenuOpen(false);
                if (opt.onClick) opt.onClick(e);
              }}
              className="Header-option"
              style={{
                color: selectedIndex === i ? selectedColor : color,
                fontWeight: selectedIndex === i ? 800 : 500,
                transition: "color 0.3s ease",
              }}
            >
              {opt.label}
            </a>
          ))}
        </nav>

        <button
          className={`Hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            width: `${hamburgerSize}px`,
            height: `${hamburgerSize * 0.7}px`,
          }}
        >
          <span style={{ height: `${hamburgerSize * 0.12}px` }} />
          <span style={{ height: `${hamburgerSize * 0.12}px` }} />
          <span style={{ height: `${hamburgerSize * 0.12}px` }} />
        </button>
      </div>
    </header>
  );
});

export default Header;
