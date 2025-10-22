import React from "react";
import "./FeaturesSection.css";

export default function FeaturesSection({ features = [] }) {
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
