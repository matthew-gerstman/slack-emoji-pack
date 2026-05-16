import type { Category } from "../types";
import { EmojiCard } from "./EmojiCard";
import "./CategorySection.css";

interface CategorySectionProps {
  readonly category: Category;
}

export function CategorySection({
  category,
}: CategorySectionProps): JSX.Element {
  return (
    <section className="category-section">
      <h2 className="category-header">
        <span className="category-emoji">{category.emoji}</span>
        {category.name}
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

