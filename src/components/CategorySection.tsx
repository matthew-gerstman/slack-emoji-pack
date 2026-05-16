import type React from "react";
import type { Category } from "../types";
import { EmojiCard } from "./EmojiCard";
import { AnimatedDivider } from "./AnimatedDivider";
import "./CategorySection.css";

interface CategorySectionProps {
  readonly category: Category;
  readonly colorIndex: number;
}

const NEON_CLASSES = [
  "glow-pink",
  "glow-blue",
  "glow-green",
  "glow-yellow",
] as const;

function getNeonClass(index: number): string {
  return NEON_CLASSES[index % NEON_CLASSES.length] ?? "glow-pink";
}

export function CategorySection({
  category,
  colorIndex,
}: CategorySectionProps): React.ReactElement {
  return (
    <section className="category-section">
      <AnimatedDivider />
      <h2 className={`category-header ${getNeonClass(colorIndex)}`}>
        <span className="category-emoji">{category.emoji}</span>
        <span className="category-title">{category.name}</span>
        <span className="category-count">({category.emojis.length})</span>
      </h2>
      <div className="emoji-grid">
        {category.emojis.map((emoji) => (
          <EmojiCard key={emoji.name} emoji={emoji} />
        ))}
      </div>
    </section>
  );
}

