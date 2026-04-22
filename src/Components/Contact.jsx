import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <section id="contact" className="vm-contact-section">
      <div className="vm-section">
        <div className="vm-contact-grid">
          <div>
            <div className="vm-section-label">Inquiry</div>
            <h2 className="vm-section-title">
              Start Your
              <br />
              Next <em>Production</em>
              <br />
              Run Today
            </h2>
            <p className="vm-contact-body">
              Tell us about your project. Our merchandising team will respond
              with a competitive quote within 24 hours — direct from our
              factory.
            </p>
            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <MapPin size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">Our Facility</div>
                <div className="vm-contact-meta-value">
                  Industrial Zone B, Dhaka, Bangladesh
                </div>
              </div>
            </div>
            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <Mail size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">Sales Email</div>
                <div className="vm-contact-meta-value">
                  wholesale@vantage-mfg.com
                </div>
              </div>
            </div>
            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <Phone size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">WhatsApp Direct</div>
                <div className="vm-contact-meta-value">+880 1XXX-XXXXXX</div>
              </div>
            </div>
          </div>
          <div className="vm-form">
            {submitted ? (
              <div className="vm-success">
                <div className="vm-success-icon">
                  <CheckCircle2 size={28} />
                </div>
                <h4>Inquiry Received</h4>
                <p>We'll WhatsApp you within 24 hours</p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: "2rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--ink)",
                    borderBottom: "1px solid currentColor",
                    paddingBottom: 2,
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="vm-form-row">
                  <div>
                    <label className="vm-label">Full Name</label>
                    <input
                      required
                      className="vm-input"
                      placeholder="e.g. Liam Smith"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="vm-label">WhatsApp</label>
                    <input
                      required
                      className="vm-input"
                      placeholder="+1 ..."
                      type="tel"
                    />
                  </div>
                </div>
                <div className="vm-form-group">
                  <label className="vm-label">Product Category</label>
                  <select className="vm-select">
                    <option>T-Shirts / Cotton</option>
                    <option>Hoodies & Fleece</option>
                    <option>Custom Headwear</option>
                    <option>Athletic Bottoms</option>
                    <option>Other / Mixed</option>
                  </select>
                </div>
                <div className="vm-form-row">
                  <div>
                    <label className="vm-label">Quantity (pcs)</label>
                    <input
                      required
                      className="vm-input"
                      placeholder="Min. 100"
                      type="number"
                      min="100"
                    />
                  </div>
                  <div>
                    <label className="vm-label">Target Delivery</label>
                    <input className="vm-input" type="date" />
                  </div>
                </div>
                <div className="vm-form-group">
                  <label className="vm-label">Additional Notes</label>
                  <textarea
                    className="vm-textarea vm-input"
                    placeholder="Fabric weight, print type, packaging requirements..."
                  />
                </div>
                <button type="submit" className="vm-submit">
                  Send Inquiry <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
