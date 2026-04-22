import React from 'react'

const Marquee = () => {
    const marqueeItems = ['PRIVATE LABEL', 'CUSTOM LABELS', 'LOW MOQ', 'OEM/ODM', 'FAST SAMPLING', 'EXPORT QUALITY', 'BULK PRODUCTION', 'SUSTAINABLE SOURCING'];
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