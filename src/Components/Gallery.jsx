import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Gallery = () => {
  return (
     <section id="gallery" className="vm-gallery-section">
        <div className="vm-section">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'0.5rem'}}>
            <div>
              <div className="vm-section-label">Production Showcase</div>
              <h2 className="vm-section-title">Inside the <em>Factory</em></h2>
            </div>
            <button style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:8,fontSize:10,fontWeight:600,letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--muted)'}}>
              Full Portfolio <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="vm-gallery-grid">
            <div className="vm-gallery-main">
              <img src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop" alt="Fabric" />
              <div className="vm-gallery-caption">Fabric Stock & Sorting</div>
            </div>
            <div className="vm-gallery-sm">
              <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop" alt="Print" />
              <div className="vm-gallery-caption">Print & Embellishment</div>
            </div>
            <div className="vm-gallery-sm">
              <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop" alt="Pack" />
              <div className="vm-gallery-caption">Packaging & Labeling</div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Gallery