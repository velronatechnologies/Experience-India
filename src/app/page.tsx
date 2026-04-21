import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <main className={`screen ${poppins.variable}`}>
      <div className="layout-container">
        {/* Grid Overlay */}
        <div className="grid-overlay" aria-hidden="true" />

        {/* Logo 1 Section using Logo.png as requested */}
        <div className="logo-box">
          <Image
            src="/Logo.png"
            alt="Experience India Logo"
            width={658}
            height={124}
            priority
            className="main-logo"
          />
        </div>

        {/* Description Text */}
        <p className="description">
          We’re quietly working on new ways to make a bigger difference. Updates
          will be shared soon.
        </p>

        {/* Footer Credit Section */}
        <p className="section-80g">A 80G company by</p>
        
        {/* WORDMARK PNG 1 3 */}
        <div className="wordmark-box">
          <Image
            src="/Wordmark.svg"
            alt="Ticpin wordmark"
            width={155}
            height={39}
            className="wordmark"
          />
        </div>

        {/* Rectangle 382/Bottom bar - Clickable mailto link */}
        <a href="mailto:support@ticpin.in" className="bottom-rect">
          <p className="contact-info">For queries contact us support@ticpin.in</p>
        </a>
      </div>
    </main>
  );
}
