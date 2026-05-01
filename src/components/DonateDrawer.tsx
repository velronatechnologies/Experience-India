"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./DonateDrawer.css";

interface DonateDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateDrawer: React.FC<DonateDrawerProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [citizenType, setCitizenType] = useState<"indian" | "foreign">("indian");
  const [selectedAmount, setSelectedAmount] = useState<number | "other">(500);

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

  const amounts = [
    { value: 500, desc: "8 nutritious meals" },
    { value: 1000, desc: "16 nutritious meals" },
    { value: 5000, desc: "80 nutritious meals" },
    { value: "other", desc: "" }
  ];

  return (
    <div className={`donate-drawer-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div
        className={`donate-drawer-content ${isOpen ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="donate-header">
          <button className="donate-close-btn" onClick={onClose}>
            <Image src="/partner page/x.svg" alt="Close" width={22} height={23} />
          </button>
          <h2 className="donate-title">Donate now</h2>
        </div>

        <div className="donate-body">
          {/* Citizen Toggle */}
          <div className="citizen-toggle">
            <div className={`toggle-slider ${citizenType === "indian" ? "indian" : "foreign"}`}></div>
            <div
              className={`citizen-option ${citizenType === "indian" ? "active" : ""}`}
              onClick={() => setCitizenType("indian")}
            >
              Indian citizen
            </div>
            <div
              className={`citizen-option ${citizenType === "foreign" ? "active" : ""}`}
              onClick={() => setCitizenType("foreign")}
            >
              Foreign citizen
            </div>
          </div>

          {/* Donation Amount Section */}
          <div className="donate-section amount-section">
            <h3 className="donate-section-label">Donation amount</h3>
            <div className="amount-grid">
              {amounts.map((amt) => (
                <div
                  key={amt.value}
                  className={`amount-card ${selectedAmount === amt.value ? "selected" : ""}`}
                  onClick={() => setSelectedAmount(amt.value as any)}
                >
                  <span className="amount-value">
                    {amt.value === "other" ? "Other" : `₹${amt.value}`}
                  </span>
                  {amt.desc && <span className="amount-desc">{amt.desc}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Your Details Section */}
          <div className="donate-section details-section">
            <h3 className="donate-section-label">Your details</h3>

            <div className="donate-input-group">
              <label className="donate-field-label">Name*</label>
              <input type="text" className="donate-input" placeholder="Enter your name" />
            </div>

            <div className="donate-input-group">
              <label className="donate-field-label">Mobile number*</label>
              <div className="phone-input-container">
                <div className="flag-icon">
                  <div className="flag-saffron"></div>
                  <div className="flag-white">
                    <div className="flag-chakra"></div>
                  </div>
                  <div className="flag-green"></div>
                </div>
                <span className="country-prefix">+91</span>
                <input type="text" className="phone-input-field" placeholder="Mobile number" />
              </div>
            </div>

            <div className="donate-input-group">
              <label className="donate-field-label">Address*</label>
              <input type="text" className="donate-input" placeholder="Enter your address" />
            </div>

            <div className="donate-input-group">
              <label className="donate-field-label">Pincode*</label>
              <input type="text" className="donate-input" placeholder="Enter pincode" />
            </div>

            <div className="donate-input-group">
              <label className="donate-field-label">Email*</label>
              <input type="email" className="donate-input" placeholder="Enter your email" />
            </div>

            <div className="donate-input-group">
              <label className="donate-field-label">PAN (optional)</label>
              <input type="text" className="donate-input" placeholder="Enter PAN" />
              <p className="pan-info">Required to issue receipt and Form 114 (ertswhile Form 10BE)</p>
            </div>
          </div>

          {/* Proceed Button */}
          <button className="proceed-btn" onClick={() => console.log("Proceeding to pay...")}>
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateDrawer;
