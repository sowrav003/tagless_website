import React from 'react'

const Footer = () => {
    
  return (
     <footer className="vm-footer">
        <div className="vm-section">
          <div className="vm-footer-grid">
            <div>
              <div className="vm-footer-brand">
                <div className="vm-footer-mark"><span>VM</span></div>
                VANTAGE MFG
              </div>
              <p className="vm-footer-tagline">
                Ethical manufacturing and global supply chain excellence for the next generation of premium fashion labels.
              </p>
            </div>
            <div>
              <div className="vm-footer-heading">Navigate</div>
              <ul className="vm-footer-links">
                {[['Products','products'],['Process','process'],['About','about'],['Gallery','gallery'],['Contact','contact']].map(([l,id]) => (
                  <li key={id}><button onClick={() => scrollTo(id)}>{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="vm-footer-heading">Contact</div>
              <ul className="vm-footer-links">
                <li><button>wholesale@vantage-mfg.com</button></li>
                <li><button>+880 1XXX-XXXXXX</button></li>
                <li><button>Dhaka, Bangladesh</button></li>
              </ul>
            </div>
            <div>
              <div className="vm-footer-heading">Certifications</div>
              <div className="vm-footer-certs">
                {['OEKO-TEX Standard 100','WRAP Platinum','GOTS Organic','ISO 9001:2015'].map(c => (
                  <div key={c} className="vm-cert">{c}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="vm-footer-bottom">
            <p>© 2025 Vantage Manufacturing. All rights reserved.</p>
            <div className="vm-footer-social">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer