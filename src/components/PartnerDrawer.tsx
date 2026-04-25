"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./PartnerDrawer.css";

interface PartnerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerDrawer: React.FC<PartnerDrawerProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`drawer-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div 
        className={`drawer-content ${isOpen ? "open" : ""}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="drawer-header">
          <button className="close-btn" onClick={onClose}>
            <Image src="/partner page/x.svg" alt="Close" width={22} height={23} />
          </button>
          <h2 className="drawer-title">Partner with us</h2>
        </div>

        <div className="drawer-body">
          {/* Organisation Details Section */}
          <div className="form-section section-1">
          <h3 className="drawer-section-label">Organisation/individual details</h3>
            
            <div className="input-group">
              <input type="text" placeholder="Name*" className="form-input" />
            </div>

            <div className="input-group phone-group">
              <div className="flag-container">
                <div className="flag-top"></div>
                <div className="flag-middle">
                  <svg className="flag-wheel" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="#00247D" strokeWidth="2"/>
                    {[...Array(24)].map((_, i) => (
                      <line 
                        key={i}
                        x1="12" y1="12" 
                        x2={12 + 10 * Math.cos((i * 15 * Math.PI) / 180)} 
                        y2={12 + 10 * Math.sin((i * 15 * Math.PI) / 180)} 
                        stroke="#00247D" 
                        strokeWidth="1"
                      />
                    ))}
                  </svg>
                </div>
                <div className="flag-bottom"></div>
              </div>
              <span className="country-code">+91</span>
              <input type="text" placeholder="Mobile number*" className="form-input phone-input" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email*" className="form-input" />
            </div>
          </div>

          {/* Anything else Section */}
          <div className="form-section section-2">
            <h3 className="drawer-section-label">Anything you would like for us to know?</h3>
            <div className="input-group">
              <textarea placeholder="Write details here*" className="form-textarea"></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PartnerDrawer;
