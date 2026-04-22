import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="vm-nav">
      <div className="vm-nav-inner">
        <div className="vm-logo" onClick={() => scrollTo("home")}>
          <div className="vm-logo-mark">
            <img src="/main_logo.png" alt="TAGLESS Logo" className="vm-logo-img" />
          </div>
          TAGLESS
        </div>
        <div className="vm-nav-links">
          {["Products", "Process", "About", "Gallery", "Contact"].map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}>
              {l}
            </button>
          ))}
        </div>
        <button
          className="vm-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <div className="vm-mobile-menu">
          {["Products", "Process", "About", "Gallery", "Contact"].map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
