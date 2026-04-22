import React from 'react'

const Marquee = () => {
    const marqueeItems = ['Ethical Manufacturing', 'Premium Fabrics', 'Low MOQ', 'Global Shipping', 'OEKO-TEX Certified', 'WRAP Platinum', 'Fast Turnaround', 'Custom Branding'];
  return (
          <div className="vm-marquee-bar">
        <div className="vm-marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item} <span className="vm-marquee-dot">✦</span></span>
          ))}
        </div>
      </div>
  )
}

export default Marquee