import type React from "react";
import type { ChangeEvent } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  readonly query: string;
  readonly onQueryChange: (value: string) => void;
  readonly resultCount: number;
}

function handleInputChange(
  event: ChangeEvent<HTMLInputElement>,
  onQueryChange: (value: string) => void
): void {
  onQueryChange(event.target.value);
}

export function SearchBar({
  query,
  onQueryChange,
  resultCount,
}: SearchBarProps): React.ReactElement {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search emojis by name, category, or use case..."
        value={query}
        onChange={(e) => handleInputChange(e, onQueryChange)}
        aria-label="Search emojis"
      />
      {query.trim() !== "" && (
        <span className="search-result-count">
          {resultCount} {resultCount === 1 ? "result" : "results"}
        </span>
      )}
    </div>
  );
}

