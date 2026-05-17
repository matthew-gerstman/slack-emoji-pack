import { useEffect, useRef, useCallback } from "react";
import type React from "react";
import "./CursorSparkles.css";

const SPARKLE_COLORS = ["#cc77cc", "#7bbcbc", "#7bc47b", "#ccaa55", "#cc4466"];
const SPARKLE_LIFETIME_MS = 600;
const THROTTLE_MS = 50;
const MAX_SPARKLES = 30;

function pickRandomColor(): string {
  return SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)] ?? "#cc77cc";
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

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CursorSparkles(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);
  const pendingTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const handleMouseMove = useCallback((e: MouseEvent): void => {
    const now = Date.now();
    if (now - lastSpawnRef.current < THROTTLE_MS) return;
    lastSpawnRef.current = now;

    const container = containerRef.current;
    if (container === null) return;
    if (container.children.length >= MAX_SPARKLES) return;

    const sparkle = createSparkleElement(e.clientX, e.clientY);
    container.appendChild(sparkle);

    const timerId = setTimeout(() => {
      sparkle.remove();
    }, SPARKLE_LIFETIME_MS);
    pendingTimers.current.push(timerId);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    document.addEventListener("mousemove", handleMouseMove);
    return (): void => {
      document.removeEventListener("mousemove", handleMouseMove);
      pendingTimers.current.forEach(clearTimeout);
      pendingTimers.current = [];
      // Remove any remaining sparkle elements
      const container = containerRef.current;
      if (container !== null) {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
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

