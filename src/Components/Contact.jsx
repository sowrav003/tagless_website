import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(e.target);

    // Replace with your real Web3Forms key
    formData.append("access_key", "a490ebd9-ffa7-48e2-a261-79d3ce2cf315");

    // Optional subject line
    formData.append("subject", "New TAGLESS Website Inquiry");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      setResult("Inquiry sent successfully!");
      e.target.reset();

      setTimeout(() => {
        setSubmitted(false);
        setResult("");
      }, 5000);
    } else {
      setResult("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="vm-contact-section">
      <div className="vm-section">
        <div className="vm-contact-grid">
          {/* Left Side */}
          <div>
            <div className="vm-section-label">CONTACT TAGLESS</div>

            <h2 className="vm-section-title">
              Start Your
              <br />
              Next <em>Order</em>
              <br />
              Today
            </h2>

            <p className="vm-contact-body">
              Tell us about your product, quantity, and requirements. We’ll help
              you source quality clothing with clear communication and smooth
              delivery.
            </p>

            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <MapPin size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">OPERATING FROM</div>
                <div className="vm-contact-meta-value">
                  Uttara, Dhaka, Bangladesh
                </div>
              </div>
            </div>

            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <Mail size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">CONTACT EMAIL</div>
                <div className="vm-contact-meta-value">
                  tagless.official@gmail.com
                </div>
              </div>
            </div>

            <div className="vm-contact-item">
              <div className="vm-contact-icon-wrap">
                <Phone size={18} />
              </div>
              <div>
                <div className="vm-contact-meta-label">WHATSAPP</div>
                <div className="vm-contact-meta-value">
                  +880 1610-747629
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="vm-form">
            {submitted ? (
              <div className="vm-success">
                <div className="vm-success-icon">
                  <CheckCircle2 size={28} />
                </div>

                <h4>Inquiry Received</h4>
                <p>We’ll contact you within 24 hours.</p>

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
                      name="name"
                      required
                      className="vm-input"
                      placeholder="e.g. Liam Smith"
                      type="text"
                    />
                  </div>

                  <div>
                    <label className="vm-label">WhatsApp</label>
                    <input
                      name="whatsapp"
                      required
                      className="vm-input"
                      placeholder="+880 1610-747629"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="vm-form-group">
                  <label className="vm-label">Email Address</label>
                  <input
                    name="email"
                    required
                    className="vm-input"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>

                <div className="vm-form-group">
                  <label className="vm-label">Product Category</label>
                  <select
                    name="product_category"
                    className="vm-select"
                  >
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
                      name="quantity"
                      required
                      className="vm-input"
                      placeholder="Min. 100"
                      type="number"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="vm-label">Target Delivery</label>
                    <input
                      name="delivery_date"
                      className="vm-input"
                      type="date"
                    />
                  </div>
                </div>

                <div className="vm-form-group">
                  <label className="vm-label">Additional Notes</label>
                  <textarea
                    name="message"
                    className="vm-textarea vm-input"
                    placeholder="Fabric weight, print type, packaging requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="vm-submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                  <ArrowRight size={14} />
                </button>

                {result && (
                  <span
                    style={{
                      display: "block",
                      marginTop: "1rem",
                      fontSize: "14px",
                    }}
                  >
                    {result}
                  </span>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;