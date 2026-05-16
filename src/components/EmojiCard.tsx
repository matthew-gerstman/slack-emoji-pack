import { useCallback, useState } from "react";
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

export function EmojiCard({ emoji }: EmojiCardProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback((): void => {
    const slackName = formatSlackName(emoji.name);
    void copyToClipboard(slackName).then((success) => {
      if (success) {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }
    });
  }, [emoji.name]);

  return (
    <div className="emoji-card" onClick={handleCopy} title={`Click to copy ${formatSlackName(emoji.name)}`}>
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
    </div>
  );
}

