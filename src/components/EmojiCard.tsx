import { useCallback, useEffect, useRef, useState } from "react";
import type React from "react";
import type { Emoji } from "../types";
import "./EmojiCard.css";

interface EmojiCardProps {
  readonly emoji: Emoji;
}

function formatSlackName(name: string): string {
  return `:${name}:`;
}

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function EmojiCard({ emoji }: EmojiCardProps): React.ReactElement {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return (): void => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleCopy = useCallback((): void => {
    const slackName = formatSlackName(emoji.name);
    void copyToClipboard(slackName).then((success) => {
      if (success) {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }
        setCopied(true);
        timerRef.current = setTimeout(() => {
          setCopied(false);
        }, 1500);
      }
    });
  }, [emoji.name]);

  return (
    <button
      className="emoji-card"
      onClick={handleCopy}
      aria-label={`Copy ${formatSlackName(emoji.name)} to clipboard`}
      type="button"
    >
      <div className="emoji-image-container">
        <img
          src={`${import.meta.env.BASE_URL}gifs/${emoji.filename}`}
          alt={emoji.name}
          className="emoji-image"
          loading="lazy"
        />
      </div>
      <div className="emoji-name">
        {copied ? "Copied!" : formatSlackName(emoji.name)}
      </div>
    </button>
  );
}

