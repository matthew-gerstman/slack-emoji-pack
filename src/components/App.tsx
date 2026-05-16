import type React from "react";
import type { Category } from "../types";
import { categories } from "../data/emojis";
import { useEmojiFilter } from "../hooks/useEmojiFilter";
import { Header } from "./Header";
import { HitCounter } from "./HitCounter";
import { SearchBar } from "./SearchBar";
import { CategorySection } from "./CategorySection";
import { Footer } from "./Footer";
import { CursorSparkles } from "./CursorSparkles";
import "./App.css";

function countFilteredEmojis(
  filteredCategories: readonly Category[]
): number {
  return filteredCategories.reduce(
    (sum, cat) => sum + cat.emojis.length,
    0
  );
}

export function App(): React.ReactElement {
  const { query, setQuery, filteredCategories } = useEmojiFilter(categories);
  const resultCount = countFilteredEmojis(filteredCategories);

  return (
    <div className="app">
      <CursorSparkles />
      <Header />
      <HitCounter />
      <main className="app-main">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          resultCount={resultCount}
        />
        {filteredCategories.length === 0 ? (
          <div className="no-results bevel-inset">
            <span className="glow-pink">
              No emojis found matching &ldquo;{query}&rdquo;
            </span>
          </div>
        ) : (
          filteredCategories.map((category, index) => (
            <CategorySection
              key={category.name}
              category={category}
              colorIndex={index}
            />
          ))
        )}
      </main>
      <Footer />
    </div>
  );
}

