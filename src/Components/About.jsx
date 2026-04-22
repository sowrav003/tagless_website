import { CheckCircle2 } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section id="about" className="vm-about">
      <div className="vm-section">
        <div className="vm-about-grid">
          <div className="vm-about-img-wrap">
            <img
              className="vm-about-img"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
              alt="Factory"
            />
            <div className="vm-about-badge">
              <div className="vm-about-badge-num">TAGLESS</div>
              <div className="vm-about-badge-label">
                NEW ERA MANUFACTURING FOR BRANDS
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <div className="vm-section-label">ABOUT TAGLESS</div>
            <h2 className="vm-section-title">
              Built for Brands
              <br />
              <em className="vm-em-text">That Move Fast</em>
            </h2>
            <p className="vm-about-body">
              TAGLESS is a modern clothing manufacturing partner helping
              startups, streetwear labels, and growing fashion brands bring
              ideas to life with reliable production and premium quality.
            </p>
            <p className="vm-about-body" style={{ marginTop: "-1rem" }}>
              From everyday essentials to custom streetwear pieces, we produce
              garments with clean finishing, quality fabrics, and scalable
              manufacturing support—helping brands move from idea to finished
              product faster.
            </p>
            <ul className="vm-checklist">
              {[
                "T-Shirts, Polos & Oversized Tees",
                "Hoodies, Sweatshirts & Joggers",
                "Denim, Shorts & Bottomwear",
                "Custom Labels & Packaging",
                "Printing & Embroidery Options",
                "Worldwide Shipping Support",
              ].map((item, i) => (
                <li key={i}>
                  <CheckCircle2
                    size={14}
                    className="vm-check-icon"
                    style={{ color: "#3B6B48", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
