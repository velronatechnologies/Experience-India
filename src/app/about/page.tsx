"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PartnerDrawer from "@/components/PartnerDrawer";

export default function AboutPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <main className="main-page about-page">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <Link href="/">
            <Image src="/main logo.svg" alt="Experience India Logo" width={206} height={39} priority />
          </Link>
        </div>
        <nav className="nav-links">
          <Link href="/about" className="nav-link active">About us</Link>
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
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-text" style={{ marginTop: "400px" }}>
            Experience India is a giveback initiative by Ticpin <br /> focused on improving access to education and opportunities <br /> for families in need
          </h1>
        </div>
        <div className="scroll-down">
          <span>Scroll down</span>
          <div className="scroll-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-arc-container">
          <Image src="/Ellipse 61.svg" alt="Curve" width={1244} height={622} className="quote-arc" priority />
        </div>
        <div className="quote-container ">
          <p className="quote-text">
            Behind every plate is a person who puts heart <br />
            into serving others with <span className="love-text">love</span>
            <Image src="/heart.svg" alt="heart" width={38} height={38} className="heart-icon" />
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery">
        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <Image src="/Rectangle 428.svg" alt="Gallery 1" fill className="object-cover" />
          </div>
          <div className="gallery-item item-2">
            <Image src="/Rectangle 429.svg" alt="Gallery 2" fill className="object-cover" />
          </div>
          <div className="gallery-item item-3">
            <Image src="/Rectangle 430.svg" alt="Gallery 3" fill className="object-cover" />
          </div>
          <div className="gallery-item item-4">
            <Image src="/Rectangle 431.svg" alt="Gallery 4" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="journey-card">
          <div className="journey-content">
            <h2 className="journey-title">Our journey</h2>
            <p className="journey-desc">
              Here's the story of how we got here, and the lives we have changed along the way.
            </p>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <span className="year">2026</span>
                  <p>Velrona Foundation India officially joined Ticpin to become Experience India.</p>
                </div>
              </div>
              <div className="timeline-line"></div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <span className="year">Continuing...</span>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-image-placeholder">
            {/* Placeholder for Rectangle 433 */}
          </div>
        </div>
      </section>

      {/* Contact Banner Section */}
      <section className="contact-banner-section">
        <div className="contact-banner">
          <div className="contact-content">
            <h2 className="contact-title">We'd love to hear from you.</h2>
            <p className="contact-desc">
              Any questions? We are happy to help. Please contact us at <a href="mailto:contact@experienceindiaupdates.org">contact@experienceindiaupdates.org</a>
            </p>
          </div>
          <div className="contact-image-placeholder">
            <span>IMAGE</span>
          </div>
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
