import { useEffect, useRef, useCallback } from "react";
import type React from "react";
import "./CursorSparkles.css";

const SPARKLE_COLORS = ["#ff00ff", "#00ffff", "#39ff14", "#ffd700", "#ff0040"];
const SPARKLE_LIFETIME_MS = 600;
const THROTTLE_MS = 50;

function pickRandomColor(): string {
  return SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
}

function createSparkleElement(x: number, y: number): HTMLSpanElement {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.textContent = "✦";
  sparkle.style.left = `${String(x)}px`;
  sparkle.style.top = `${String(y)}px`;
  sparkle.style.color = pickRandomColor();
  return sparkle;
}

function scheduleRemoval(element: HTMLElement, delay: number): void {
  setTimeout(() => {
    element.remove();
  }, delay);
}

export function CursorSparkles(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent): void => {
    const now = Date.now();
    if (now - lastSpawnRef.current < THROTTLE_MS) return;
    lastSpawnRef.current = now;

    const container = containerRef.current;
    if (container === null) return;

    const sparkle = createSparkleElement(e.clientX, e.clientY);
    container.appendChild(sparkle);
    scheduleRemoval(sparkle, SPARKLE_LIFETIME_MS);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return (): void => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="sparkle-container"
      aria-hidden="true"
    />
  );
}

