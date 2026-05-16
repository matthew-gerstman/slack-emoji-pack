import { categories, TOTAL_EMOJI_COUNT } from "../data/emojis";
import { useEmojiFilter } from "../hooks/useEmojiFilter";
import { CategorySection } from "./CategorySection";
import { SearchBar } from "./SearchBar";
import "./App.css";

function countFilteredEmojis(
  filteredCategories: readonly { readonly emojis: readonly unknown[] }[]
): number {
  return filteredCategories.reduce(
    (sum, cat) => sum + cat.emojis.length,
    0
  );
}

export function App(): JSX.Element {
  const { query, setQuery, filteredCategories } = useEmojiFilter(categories);
  const resultCount = countFilteredEmojis(filteredCategories);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Slack Emoji Pack</h1>
        <p className="app-subtitle">
          {TOTAL_EMOJI_COUNT} custom emojis across {categories.length} categories
        </p>
      </header>
      <main className="app-main">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          resultCount={resultCount}
        />
        {filteredCategories.length === 0 ? (
          <div className="no-results">
            No emojis found matching &ldquo;{query}&rdquo;
          </div>
        ) : (
          filteredCategories.map((category) => (
            <CategorySection key={category.name} category={category} />
          ))
        )}
      </main>
      <footer className="app-footer">
        <p>Click any emoji to copy its Slack name to clipboard</p>
      </footer>
    </div>
  );
}

