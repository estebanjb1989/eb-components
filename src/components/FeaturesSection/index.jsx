import React from "react";
import "./FeaturesSection.css";

export default function FeaturesSection() {
  const features = [
    {
      icon: "https://placehold.co/80x80/ffb84d/fff?text=AI",
      title: "Automatización Inteligente",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius velit at enim gravida, sit amet facilisis elit sagittis.",
      color: "#ffb84d",
    },
    {
      icon: "https://placehold.co/80x80/6cc070/fff?text=🤝",
      title: "Partner Estratégico",
      text: "Curabitur et risus vel sapien commodo volutpat. Cras tempus, nibh nec congue imperdiet, ante urna cursus metus.",
      color: "#6cc070",
    },
    {
      icon: "https://placehold.co/80x80/8266ff/fff?text=💡",
      title: "Innovación y Resultados",
      text: "Fusce at magna et elit vulputate posuere. Nulla facilisi. Integer sagittis, odio sit amet cursus viverra, justo metus gravida lorem.",
      color: "#8266ff",
    },
    {
      icon: "https://placehold.co/80x80/ff915a/fff?text=JOY",
      title: "Parte de Joy Group",
      text: "Aliquam erat volutpat. Morbi facilisis turpis a dui convallis, ut tempor lectus vestibulum. Integer mollis magna nec ex viverra.",
      color: "#ff915a",
    },
  ];

  return (
    <section className="FeaturesSection">
      <div className="FeaturesContainer">
        {features.map((f, i) => (
          <div className="FeatureCard" key={i}>
            <img
              src={f.icon}
              alt={f.title}
              className="FeatureIcon"
              style={{ borderColor: f.color }}
            />
            <h3 className="FeatureTitle" style={{ color: f.color }}>
              {f.title}
            </h3>
            <p className="FeatureText">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
