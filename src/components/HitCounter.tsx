import type React from "react";
import "./HitCounter.css";

const VISITOR_NUMBER = "000001337";

function renderDigits(value: string): React.ReactElement[] {
  return value.split("").map((digit, index) => (
    <span key={index} className="odometer-digit">
      {digit}
    </span>
  ));
}

function getFormattedDate(): string {
  return new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function HitCounter(): React.ReactElement {
  return (
    <div className="hit-counter-bar bevel-raised">
      <div className="hit-counter-content">
        <span className="hit-counter-label">
          You are visitor #{" "}
          <span className="hit-counter-digits">
            {renderDigits(VISITOR_NUMBER)}
          </span>
        </span>
        <span className="hit-counter-separator">|</span>
        <span className="hit-counter-date">
          Last updated: {getFormattedDate()}
        </span>
      </div>
    </div>
  );
}

