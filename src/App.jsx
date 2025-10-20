import React from "react";
import LandingPage from "./components/LandingPage";
import FeaturesSection from "./components/FeaturesSection";

export default function App() {
  const pages = [
    {
      section: 1,
      label: "Inicio",
      image: "https://placehold.co/1200x397?text=Bienvenidos&font=montserrat",
      overlayText: "AGUADULCE IMPORT Moda y Tecnología",
      features: <FeaturesSection />,
      footer: "Explora nuestras últimas colecciones.",
    },
    {
      section: 2,
      label: "Productos",
      image: "https://placehold.co/1200x397?text=Productos&font=montserrat",
      overlayText: "Calidad y estilo en cada detalle",
      footer: "Visita nuestra tienda online.",
    },
    {
      section: 3,
      label: "Contacto",
      image: "https://placehold.co/1200x397?text=Contacto&font=montserrat",
      footer: "Comunicate con nuestro equipo.",
    },
  ];

  const footerProps = {
    backgroundColor: "#0a0a0a",
    textColor: "#f0f0f0",
  };

  return <LandingPage pages={pages} footerProps={footerProps} />;
}
