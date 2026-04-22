import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Product = () => {
    const products = [
  { title: "Premium Heavyweight Tees", fabric: "180–240 GSM Combed Cotton", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop", tag: "Min. 100 pcs" },
  { title: "Oversized Streetwear Hoodies", fabric: "350–450 GSM French Terry", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop", tag: "Custom Print" },
  { title: "Structured Cotton Caps", fabric: "6-Panel Twill / Canvas", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop", tag: "Custom Brand" },
  { title: "Athletic Fleece Shorts", fabric: "Polyester Mesh / Cotton Blend", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop", tag: "Reinforced" }
];
  return (
     <section id="products" className="vm-products-section">
        <div className="vm-section">
          <div className="vm-products-header">
            <div>
              <div className="vm-section-label">Wholesale Catalogue</div>
              <h2 className="vm-section-title">What We <em>Build</em></h2>
            </div>
            <button style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center',gap:8,fontSize:10,fontWeight:600,letterSpacing:'0.25em',textTransform:'uppercase',color:'var(--muted)'}}
              onClick={() => scrollTo('contact')}>
              Request Custom <ArrowUpRight size={14} />
            </button>
          </div>
          <div className="vm-products-grid">
            {products.map((p, i) => (
              <div key={i} className="vm-product-card">
                <div className="vm-product-img-wrap">
                  <img className="vm-product-img" src={p.image} alt={p.title} />
                  <span className="vm-product-tag">{p.tag}</span>
                </div>
                <div className="vm-product-info">
                  <div className="vm-product-name">{p.title}</div>
                  <div className="vm-product-fabric">{p.fabric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Product