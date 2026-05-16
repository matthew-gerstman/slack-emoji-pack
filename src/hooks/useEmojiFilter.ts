import { useMemo, useState } from "react";
import type { Category } from "../types";

interface UseEmojiFilterResult {
  readonly query: string;
  readonly setQuery: (value: string) => void;
  readonly filteredCategories: readonly Category[];
}

function matchesQuery(text: string, normalizedQuery: string): boolean {
  return text.toLowerCase().includes(normalizedQuery);
}

function filterCategoryByQuery(
  category: Category,
  normalizedQuery: string
): Category | null {
  const categoryNameMatches = matchesQuery(category.name, normalizedQuery);

  if (categoryNameMatches) {
    return category;
  }

  const matchingEmojis = category.emojis.filter(
    (emoji) =>
      matchesQuery(emoji.name, normalizedQuery) ||
      matchesQuery(emoji.reactionType, normalizedQuery) ||
      matchesQuery(emoji.useCase, normalizedQuery)
  );

  if (matchingEmojis.length === 0) {
    return null;
  }

  return { ...category, emojis: matchingEmojis };
}

export function useEmojiFilter(
  categories: readonly Category[]
): UseEmojiFilterResult {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery === "") {
      return categories;
    }

    const results: Category[] = [];
    for (const category of categories) {
      const filtered = filterCategoryByQuery(category, normalizedQuery);
      if (filtered !== null) {
        results.push(filtered);
      }
    }
    return results;
  }, [categories, query]);

  return { query, setQuery, filteredCategories };
}

