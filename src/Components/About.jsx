import { CheckCircle2 } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
          <section id="about" className="vm-about">
        <div className="vm-section">
          <div className="vm-about-grid">
            <div className="vm-about-img-wrap">
              <img className="vm-about-img" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" alt="Factory" />
              <div className="vm-about-badge">
                <div className="vm-about-badge-num">500K+</div>
                <div className="vm-about-badge-label">Units produced annually for global partners</div>
              </div>
            </div>
            <div style={{paddingLeft: '2rem'}}>
              <div className="vm-section-label">The Vantage Standard</div>
              <h2 className="vm-section-title">Decades of<br /><em>Craftsmanship</em><br />in Every Stitch</h2>
              <p className="vm-about-body">
                Starting as a small family unit, we've grown into a modern manufacturing hub that bridges traditional craftsmanship with cutting-edge technology. For brand owners, reliability is everything — and we deliver it.
              </p>
              <p className="vm-about-body" style={{marginTop: '-1rem'}}>
                We offer end-to-end support from fabric sourcing to final tagging and retail-ready packaging — all direct from our factory floor, with no middlemen.
              </p>
              <ul className="vm-checklist">
                {['Socially compliant factory environment','Zero-compromise QC protocols','Direct factory pricing — no middlemen','OEKO-TEX & GOTS certified'].map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="vm-check-icon" style={{color:'#3B6B48', flexShrink:0}} />
                    <span style={{fontSize:'10px', fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About