# Slack Emoji Pack 🎨

A curated collection of **117 reaction GIFs** for your Slack workspace, organized into **31 categories**.

**Live site:** [matthew-gerstman.github.io/slack-emoji-pack/](https://matthew-gerstman.github.io/slack-emoji-pack/)

## Development

Built with **Vite + React + TypeScript** (strict mode).

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Categories

### Reaction GIFs
| Category | Count | Examples |
|----------|-------|----------|
| 🏃 Roadrunner Running Fast | 3 | `:roadrunner-running:`, `:roadrunner-speed:` |
| 🏜️ Wile E Coyote | 2 | `:wile-e-falling:`, `:wile-e-train:` |
| 🧠 Think Smart | 3 | `:think-smart:`, `:cat-thinking:`, `:smarty:` |
| 🙄 Eye Roll Collection | 11 | `:jessica-jones-eye-roll:`, `:judge-judy-eye-roll:` |
| 😳 What The Fuck | 5 | `:wtf:`, `:ryan-reynolds-wtf:` |
| ❓ Why? | 4 | `:why-are-you-gay:`, `:confused-cat:` |
| 💪 You Can Do Better | 3 | `:do-better:`, `:try-again:` |
| 👌 Ok. | 5 | `:jlaw-thumbs-up:`, `:jonah-hill-ok:` |

### Taylor Swift Collection (16 GIFs)
| Category | Examples |
|----------|----------|
| 💖 Running Fast | `:taylor-dancing:`, `:taylor-shake-it-off:` |
| 💖 Eye Roll | `:taylor-eye-roll:`, `:taylor-drunk-eye-roll:` |
| 💖 Think Smart | `:taylor-thinking:`, `:taylor-hmm:` |
| 💖 WTF | `:taylor-mind-blown:`, `:taylor-shocked:` |
| 💖 Why? | `:taylor-confused:`, `:taylor-why:` |
| 💖 Do Better | `:taylor-disappointed:`, `:taylor-do-better:` |
| 💖 Ok | `:taylor-thumbs-up:`, `:taylor-ok:` |
| 💖 This Is Great | `:taylor-wow:`, `:taylor-love:` |

### Movie & Musical GIFs (30 GIFs)
| Source | Count | Examples |
|-------|-------|----------|
| 🎬 Mamma Mia | 4 | `:mamma-mia-meryl:`, `:mamma-mia-dance:` |
| 🎭 Hamilton | 4 | `:hamilton-lin:`, `:hamilton-king-george:` |
| 🎤 The Eras Tour | 4 | `:eras-cruel-summer:`, `:eras-speak-now:` |
| 🎸 Grease | 4 | `:grease-olivia:`, `:grease-dance:` |
| 🎹 Tommy | 2 | `:tommy-rock:`, `:tommy-elton:` |
| 🎬 Popstar | 4 | `:popstar-unicorn:`, `:popstar-dance:` |
| 🧠 Idiocracy | 4 | `:idiocracy-president:`, `:idiocracy-lol:` |
| 🚀 Spaceballs | 4 | `:spaceballs-helmet:`, `:spaceballs-pizza:` |

### TV Show GIFs (25 GIFs)
| Show | Count | Examples |
|------|-------|----------|
| 📺 Parks and Rec | 5 | `:pawnee-talk:`, `:pawnee-excited:` |
| 😇 The Good Place | 5 | `:tgp-eleanor:`, `:tgp-holy-fork:` |
| 🚔 Brooklyn 99 | 5 | `:b99-interested:`, `:b99-noice:` |
| 💅 Mean Girls | 5 | `:mg-fetch:`, `:mg-obsessed:` |
| 💋 Clueless | 5 | `:clueless-asif:`, `:clueless-whatever:` |
| 💖 Legally Blonde | 5 | `:elle-hard:`, `:elle-endorphins:` |
| 👠 Devil Wears Prada | 5 | `:miranda-look:`, `:miranda-thatsall:` |

## Features

- **Search & filter** — by emoji name, category, reaction type, or use case
- **Hover to zoom** — 1.4× scale on hover
- **Click to copy** — copies `:emoji-name:` Slack format to clipboard
- **Lazy loading** — GIFs load on demand for fast initial page load
- **Keyboard accessible** — all interactive elements are focusable

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via GitHub Actions.

## Project Structure

```
slack-emoji-pack/
├── .github/workflows/deploy.yml  # GitHub Actions deploy
├── public/gifs/                  # All 117 GIF files
├── src/
│   ├── components/               # React components
│   ├── data/emojis.ts            # Typed emoji catalog
│   ├── hooks/useEmojiFilter.ts   # Search/filter hook
│   ├── styles/global.css         # Base styles
│   ├── types/index.ts            # TypeScript interfaces
│   └── main.tsx                  # Entry point
├── index.html                    # Vite entry
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Installation in Slack

### Option 1: Import individually
1. Go to your Slack workspace settings → Customize → Emoji
2. Click "Add Custom Emoji"
3. Upload GIFs from the `public/gifs/` folder
4. Use the suggested names (e.g., `wtf`, `hamilton-lin`)

### Option 2: Bulk import (Slack Enterprise)
Use Slack's bulk emoji import feature with the files in `public/gifs/`

## License

GIFs sourced from Giphy. For personal/team use only.
