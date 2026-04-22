import { ArrowRight, Phone } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className="vm-hero">
      <div className="vm-hero-left">
        <p className="vm-hero-eyebrow anim-in delay-1">
          Dhaka, Bangladesh — Est. 2008
        </p>
        <h1 className="vm-hero-title anim-in delay-2">
          Manufacture Your
          <br />
          <em className="vm-em-text">Clothing Brand</em>
          <br />
          With Us
        </h1>
        <p className="vm-hero-sub anim-in delay-3">
          End-to-end garment manufacturing for global fashion labels. Custom
          bulk orders with uncompromising quality and transparent production.
        </p>
        <div className="vm-hero-ctas anim-in delay-4">
          <button
            className="vm-btn-primary"
            onClick={() => scrollTo("contact")}
          >
            Get a Quote <ArrowRight size={14} />
          </button>
          <button className="vm-btn-secondary">
            <Phone size={12} /> WhatsApp Us
          </button>
        </div>
        {/* <div className="vm-hero-stats anim-in delay-5">
          {[
            ["500K+", "Units / Year"],
            ["18+", "Countries Served"],
            ["200+", "Skilled Operators"],
          ].map(([n, l]) => (
            <div key={n}>
              <div className="vm-stat-num">{n}</div>
              <div className="vm-stat-label">{l}</div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="vm-hero-right">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="Fashion"
        />
        <div className="vm-hero-overlay">
          <p>Current Availability</p>
          <p>Accepting New Orders — Q3 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
