import type React from "react";
import "./Footer.css";

export function Footer(): React.ReactElement {
  return (
    <footer className="retro-footer">
      <div className="construction-stripe" />

      <div className="footer-construction">
        <span className="construction-icon" aria-hidden="true">
          &#128679;
        </span>
        <span className="blink construction-text glow-yellow">
          UNDER CONSTRUCTION
        </span>
        <span className="construction-icon" aria-hidden="true">
          &#128679;
        </span>
      </div>

      <div className="footer-links">
        <a href="#guestbook" className="footer-link">
          &#128214; Sign My Guestbook!
        </a>
        <span className="footer-link-separator">|</span>
        <a href="#email" className="footer-link">
          &#128235; Email Me!
        </a>
        <span className="footer-link-separator">|</span>
        <a href="#webring" className="footer-link">
          &#127760; Join the WebRing
        </a>
      </div>

      <div className="footer-badges">
        <NetscapeBadge />
        <span className="retro-badge">
          Made with &#9829; and HTML
        </span>
        <span className="retro-badge">
          &#169; 1997 - {new Date().getFullYear()}
        </span>
      </div>

      <div className="construction-stripe" />

      <p className="footer-disclaimer">
        This page is best viewed at 800&#215;600 resolution with 16-bit color
      </p>
    </footer>
  );
}

function NetscapeBadge(): React.ReactElement {
  return (
    <span className="netscape-badge retro-badge">
      <span className="netscape-icon" aria-hidden="true">
        &#127758;
      </span>{" "}
      Best Viewed in Netscape Navigator 4.0
    </span>
  );
}

