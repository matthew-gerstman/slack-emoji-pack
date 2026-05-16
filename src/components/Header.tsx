import type React from "react";
import { TOTAL_EMOJI_COUNT } from "../data/emojis";
import "./Header.css";

const MARQUEE_TEXT =
  "~*~ SLACK EMOJI PACK ~*~ The Ultimate Emoji Collection ~*~ 100% Free ~*~ Over " +
  String(TOTAL_EMOJI_COUNT) +
  " Custom Emojis ~*~ Best Viewed at 800x600 ~*~ Welcome to My Page ~*~";

const MARQUEE_SEPARATOR = "\u00A0\u00A0\u00A0\u00A0\u00A0";

export function Header(): React.ReactElement {
  return (
    <header className="retro-header">
      <div className="construction-stripe" />
      <div className="marquee-banner bevel-raised">
        <div className="marquee-container">
          <span className="marquee-text glow-pink" aria-live="off">
            {MARQUEE_TEXT}{MARQUEE_SEPARATOR}{MARQUEE_TEXT}{MARQUEE_SEPARATOR}
          </span>
        </div>
      </div>
      <div className="construction-stripe" />
      <h1 className="retro-title">
        <span className="title-star">&#9733;</span>
        Slack Emoji Pack
        <span className="title-star">&#9733;</span>
      </h1>
      <p className="retro-subtitle glow-blue">
        {TOTAL_EMOJI_COUNT} custom emojis for your Slack workspace!
      </p>
    </header>
  );
}

