import React from "react";
import LandingPage from "./components/LandingPage";
import FeaturesSection from "./components/FeaturesSection";
import BusinessValues from "./components/BusinessValues";
import ServiceSteps from "./components/ServiceSteps";
import CaseStudyBlock from "./components/CaseStudyBlock";
import CoreValues from "./components/CoreValues";

import banner from "./assets/banners/sample.png"
import logo from "./assets/logo.png"
import feature1 from "./assets/features/1.png"
import feature2 from "./assets/features/2.png"
import feature3 from "./assets/features/3.png"
import feature4 from "./assets/features/4.png"

export default function App() {
  const features = [{
    icon: feature1,
    text: `
      JOY Labs es una empresa de desarrollo
tecnológico especializada en soluciones
de automatización e inteligencia artificial.
    `,
    color: "#ffb84d",
  }, {
    icon: feature2,
    text: `
    Es un partner estratégico
que combina comprensión
del negocio con tecnología.
    `,
    color: "#ffb84d",
  }, {
    icon: feature3,
    text: `
    Innovación, velocidad
y resultados medibles.
    `,
    color: "#ffb84d",
  }, {
    icon: feature4,
    text: `
    Forma parte de JOY Group,
pero tiene total
independencia operativa.
    `,
    color: "#ffb84d",
  }]

  const pages = [
    {
      section: 1,
      label: "Home",
      image: banner,
      features: <FeaturesSection features={features} />,
      footer: {
        foreColor: 'black', backgroundColor: '#F9F0D9', content: (
          <span className="text-center text-2xl font-bold">Combinamos visión estratégica, diseño de procesos y tecnología aplicada para resolver desafíos reales.
            Nuestra experiencia incluye sectores como turismo, retail, salud, consumo masivo y servicios.</span>
        )
      }
    },
    {
      section: 2,
      label: "Propuesta",
      image: banner,
      overlayText: "Nuestra Propuesta de Valor",
      footer: {
        foreColor: 'black', backgroundColor: '#F9F0D9', content: (
          <BusinessValues></BusinessValues>
        )
      },
    },
    {
      section: 3,
      image: banner,
      label: "Servicios",
      overlayText: "Nuestros Servicios",
      footer: {
        foreColor: 'black', backgroundColor: '#F9F0D9', content: (
          <ServiceSteps />
        )
      },
    },
    {
      section: 4,
      image: banner,
      label: "Casos de Exito",
      features: (
        <span className="my-12 mx-24 text-center text-2xl font-bold">El proyecto incluyó integración con CRM Kommo, canal WhatsApp y redes sociales.
          Hoy, el asistente responde consultas, captura leads y alimenta la base comercial automáticamente.</span>
      ),
      overlayText: "Caso de exito. Haciendo viajes",
      footer: {
        foreColor: 'black', backgroundColor: '#F9F0D9', content: (
          <CaseStudyBlock />
        )
      },
    },
    {
      section: 6,
      image: banner,
      label: "Diferenciales",
      features: (
        <span className="my-12 mx-24 text-center text-2xl font-bold">El proyecto incluyó integración con CRM Kommo, canal WhatsApp y redes sociales.
          Hoy, el asistente responde consultas, captura leads y alimenta la base comercial automáticamente.</span>
      ),
      overlayText: "Caso de exito. Haciendo viajes",
      footer: {
        foreColor: 'black', backgroundColor: '#F9F0D9', content: (
          <CoreValues />
        )
      },
    },
    {
      section: 7,
      image: banner,
      label: "Contacto",
    },
  ];


  return <LandingPage
    headerProps={{
      backgroundColor: '#F9F0D9',
      assets: {
        logo
      },
      uppercase: true
    }}
    pages={pages}
  />;
}
