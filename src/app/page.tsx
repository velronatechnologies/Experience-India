"use client";

import React, { useState } from "react";
import Image from "next/image";
import PartnerDrawer from "@/components/PartnerDrawer";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="main-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <Image src="/main logo.svg" alt="Experience India Logo" width={206} height={39} priority />
        </div>
        <nav className="nav-links">
          <a href="/about" className="nav-link">About us</a>
          <button 
            onClick={() => setIsDrawerOpen(true)} 
            className="nav-link"
            style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit' }}
          >
            Partner with us
          </button>
          <a href="#donate" className="donate-btn">Donate now</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2 className="hero-title" style={{ marginTop: "400px" }}>
          The journey of change starts with a child, and moves through society.
        </h2>
        <div className="scroll-down">
          <span>Scroll down</span>
          <div className="scroll-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <p className="mission-text" style={{ marginTop: "-50px" }}>
          Experience India is shaped by millions of Indians with one powerful vision: <br /> <span>to build a better society through every child</span>
        </p>
      </section>

      {/* Stats Section */}
      <section className="stats-grid">
        <div className="stat-card">
          <Image src="/team.svg" alt="Team" width={69} height={69} className="stat-icon" />
          <p className="stat-value">1.5 L+</p>
          <p className="stat-label">children served daily</p>
        </div>
        <div className="stat-card">
          <Image src="/cooking.svg" alt="Cooking" width={60} height={60} className="stat-icon" />
          <p className="stat-value">1.5 L+</p>
          <p className="stat-label">meals served so far</p>
        </div>
        <div className="stat-card">
          <Image src="/give.svg" alt="Give" width={53} height={41} className="stat-icon" />
          <p className="stat-value">100+</p>
          <p className="stat-label">partner centres</p>
        </div>
        <div className="stat-card">
          <Image src="/hotel.svg" alt="Cities" width={47} height={47} className="stat-icon" />
          <p className="stat-value">2+</p>
          <p className="stat-label">cities</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="reimagined">
        <div className="reimagined-content" style={{ marginTop: "-240px" }}>
          <h2 className="reimagined-title">We’ve <span style={{ color: "var(--primary-purple)" }}>reimagined</span> how<br />care reaches every child</h2>
          <p className="reimagined-desc">Driven by innovation to track, deliver,<br />and ensure every need is met.</p>
          <div className="location-tag">
            <span>South</span>
            <div className="location-info">
              <div className="location-dot"></div>
              <span>2 cities</span>
            </div>
          </div>
        </div>
        <div className="map-container" style={{ marginTop: "-60px", position: "relative" }}>
          <Image src="/ind map.svg" alt="India Map" width={744} height={744} className="map-img" />

          {/* Map Points */}
          <div className="map-point" style={{ top: '83.87%', left: '35.28%' }}>
            <div className="pulse-dot"></div>
            <div className="point-popup">Coimbatore</div>
          </div>
          <div className="map-point" style={{ top: '83.2%', left: '36.9%' }}>
            <div className="pulse-dot"></div>
            <div className="point-popup">Tiruppur</div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="section-label">OUR PROGRAMS</div>

        {/* Community Feeding */}
        <div className="program-card">
          <div className="program-content">
            <h3 className="program-title">Community Feeding</h3>
            <p className="program-desc">Simple, local meal distribution powered by volunteers and small donations.</p>
            <div className="program-features">
              <div className="feature">
                <Image src="/cooking.svg" alt="Cooking" width={45} height={45} className="feature-icon" />
                <p className="feature-text">Smarter meal planning</p>
              </div>
              <div className="feature">
                <Image src="/phone.svg" alt="Phone" width={45} height={45} className="feature-icon" />
                <p className="feature-text">Digital attendance tracking</p>
              </div>
              <div className="feature">
                <Image src="/feedback.svg" alt="Feedback" width={44} height={44} className="feature-icon" />
                <p className="feature-text">Continuous feedback loops</p>
              </div>
            </div>
          </div>
          <Image src="/image 18.png" alt="Community Feeding" width={530} height={315} className="program-img" />
        </div>

        {/* Surplus Food Sharing */}
        <div className="program-card">
          <div className="program-content">
            <h3 className="program-title">Surplus Food Sharing</h3>
            <p className="program-desc">Collecting extra food to reduce waste and feed children.</p>
            <div className="program-features">
              <div className="feature">
                <Image src="/cooking.svg" alt="Cooking" width={45} height={45} className="feature-icon" />
                <p className="feature-text">Smarter meal planning</p>
              </div>
              <div className="feature">
                <Image src="/map.svg" alt="Map" width={38} height={38} className="feature-icon" />
                <p className="feature-text">Local vendor partnerships</p>
              </div>
              <div className="feature">
                <Image src="/local-shipping.svg" alt="Shipping" width={48} height={48} className="feature-icon" />
                <p className="feature-text">Same-day redistribution</p>
              </div>
            </div>
          </div>
          <Image src="/image 18.png" alt="Surplus Food Sharing" width={530} height={315} className="program-img" />
        </div>
      </section>

      {/* Showcase Section */}
      <section className="showcase-section">
        <div className="showcase-header" style={{ marginTop: "-80px" }}>
          <h2 className="showcase-title">And this is what <span>we build</span></h2>
          <p className="showcase-subtitle">because when every child is cared for, India grows stronger.</p>
        </div>
        <div className="showcase-grid">
          <Image src="/image 18.png" alt="Showcase 1" width={327} height={415} className="showcase-img" />
          <Image src="/image 18.png" alt="Showcase 2" width={520} height={415} className="showcase-img" />
          <Image src="/image 18.png" alt="Showcase 3" width={327} height={415} className="showcase-img" />
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-content">
          <h2 className="banner-title">Here’s to you, who dares to change a <span>nation!</span></h2>
          <p className="banner-subtitle">See how you’ve helped.</p>
          <a href="#" className="ticpin-tag">
            <Image src="/WORDMARK PNG 5.svg" alt="Ticpin" width={71} height={17} />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="banner-placeholder">
          BANNER
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <Image src="/main logo.svg" alt="Experience India Logo" width={390} height={73} />
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <p>Registered as Velrona Foundation India <br /> Under the Companies Act, 2013</p>
            <a href="mailto:contact@experienceindiaupdates.org" className="email-link">contact@experienceindiaupdates.org</a>
            <p className="tax-info">All donations are tax-exempted as eligible under section 80G <br /> of the Income Tax Act, 1961.</p>
          </div>
          <div className="footer-col">
            <h4>NAVIGATION</h4>
          </div>
          <div className="footer-col">
            <h4>RESOURCES</h4>
          </div>
          <div className="footer-col">
            <h4>SOCIAL LINKS</h4>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Experience India, a Ticpin Giveback, is on a mission to nourish, support, and empower every child. With the strength of collective action, we are transforming the future of the nation—day by day.</p>
        </div>
      </footer>
      {/* Partner Drawer */}
      <PartnerDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </main>
  );
}
