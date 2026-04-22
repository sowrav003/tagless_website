import { CheckCircle2, Package, Scissors, ShieldCheck, Truck } from 'lucide-react';
import React from 'react'

const Process = () => {
    const steps = [
  { title: "Fabric Sourcing", desc: "We source the finest yarns based on your specific GSM and texture requirements.", icon: <Package style={{width:20,height:20}} /> },
  { title: "Precision Cutting", desc: "Expert pattern making and automated cutting for perfect sizing.", icon: <Scissors style={{width:20,height:20}} /> },
  { title: "Quality Stitching", desc: "200+ skilled operators using high-speed industrial machinery.", icon: <CheckCircle2 style={{width:20,height:20}} /> },
  { title: "Quality Control", desc: "4-point inspection ensuring every garment meets export standards.", icon: <ShieldCheck style={{width:20,height:20}} /> },
  { title: "Global Logistics", desc: "Secure packaging and reliable shipping to your warehouse worldwide.", icon: <Truck style={{width:20,height:20}} /> }
];
  return (
     <section id="process" className="vm-process-section">
        <div className="vm-section">
          <div className="vm-process-header">
            <div>
              <div className="vm-section-label" style={{color:'var(--bronze)'}}>Our Methodology</div>
              <h2 className="vm-process-title">From Raw Yarn to<br /><em style={{fontStyle:'italic'}}>Retail-Ready</em> Goods</h2>
            </div>
            <p className="vm-process-desc">
              Transparent communication at every stage of the production cycle ensures your vision is realized on time and on spec.
            </p>
          </div>
          <div className="vm-process-steps">
            {steps.map((s, i) => (
              <div key={i} className="vm-step">
                <span className="vm-step-num">0{i+1}</span>
                <div className="vm-step-icon" style={{color:'var(--bronze)'}}>{s.icon}</div>
                <div className="vm-step-title">{s.title}</div>
                <p className="vm-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Process