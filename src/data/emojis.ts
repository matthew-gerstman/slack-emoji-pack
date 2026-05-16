import type { Category } from "../types";

export const categories: readonly Category[] = [
  {
    name: "Roadrunner Running Fast",
    emoji: "🏃",
    emojis: [
      { name: "roadrunner-running", filename: "roadrunner-running.gif", reactionType: "Fast/Speedy/Gone", useCase: "For when things are moving fast or someone disappeared quickly" },
      { name: "roadrunner-speed", filename: "roadrunner-speed.gif", reactionType: "Fast/Speedy/Gone", useCase: "For when things are moving fast or someone disappeared quickly" },
      { name: "roadrunner-sad", filename: "roadrunner-sad.gif", reactionType: "Fast/Speedy/Gone", useCase: "For when things are moving fast or someone disappeared quickly" },
    ],
  },
  {
    name: "Wile E Coyote",
    emoji: "🏜️",
    emojis: [
      { name: "wile-e-falling", filename: "wile-e-falling.gif", reactionType: "Think/Smart/Scheming", useCase: "For planning, scheming, or when plans backfire" },
      { name: "wile-e-train", filename: "wile-e-train.gif", reactionType: "Think/Smart/Scheming", useCase: "For planning, scheming, or when plans backfire" },
    ],
  },
  {
    name: "Think Smart",
    emoji: "🧠",
    emojis: [
      { name: "think-smart", filename: "think-smart.gif", reactionType: "Think/Smart", useCase: "Thinking, planning, or being clever" },
      { name: "cat-thinking", filename: "cat-thinking.gif", reactionType: "Think/Smart", useCase: "Thinking, planning, or being clever" },
      { name: "smarty", filename: "smarty.gif", reactionType: "Think/Smart", useCase: "Thinking, planning, or being clever" },
    ],
  },
  {
    name: "Eye Roll Collection",
    emoji: "🙄",
    emojis: [
      { name: "jessica-jones-eye-roll", filename: "jessica-jones-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "girl-eye-roll", filename: "girl-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "iron-man-eye-roll", filename: "iron-man-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "office-eye-roll", filename: "office-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "jt-eye-roll", filename: "jt-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "whatever-eye-roll", filename: "whatever-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "judge-judy-eye-roll", filename: "judge-judy-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "schitts-creek-eye-roll", filename: "schitts-creek-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "nba-eye-roll", filename: "nba-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "give-me-a-break", filename: "give-me-a-break.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "lion-king-eye-roll", filename: "lion-king-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
    ],
  },
  {
    name: "What The Fuck",
    emoji: "😳",
    emojis: [
      { name: "wtf", filename: "wtf.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
      { name: "wtf-mind-blown", filename: "wtf-mind-blown.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
      { name: "ryan-reynolds-wtf", filename: "ryan-reynolds-wtf.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
      { name: "jenna-marbles-wtf", filename: "jenna-marbles-wtf.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
      { name: "surprise-wtf", filename: "surprise-wtf.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
    ],
  },
  {
    name: "Why?",
    emoji: "❓",
    emojis: [
      { name: "why-are-you-gay", filename: "why-are-you-gay.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
      { name: "hold-up-what", filename: "hold-up-what.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
      { name: "confused-cat", filename: "confused-cat.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
      { name: "confused-freak-out", filename: "confused-freak-out.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
    ],
  },
  {
    name: "You Can Do Better",
    emoji: "💪",
    emojis: [
      { name: "do-better", filename: "do-better.gif", reactionType: "Do Better/Disappointed", useCase: "Expressing disappointment or encouraging improvement" },
      { name: "you-can-do-better", filename: "you-can-do-better.gif", reactionType: "Do Better/Disappointed", useCase: "Expressing disappointment or encouraging improvement" },
      { name: "try-again", filename: "try-again.gif", reactionType: "Do Better/Disappointed", useCase: "Expressing disappointment or encouraging improvement" },
    ],
  },
  {
    name: "Ok.",
    emoji: "👌",
    emojis: [
      { name: "jlaw-thumbs-up", filename: "jlaw-thumbs-up.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
      { name: "jimmy-fallon-eh", filename: "jimmy-fallon-eh.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
      { name: "grinch-if-you-say-so", filename: "grinch-if-you-say-so.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
      { name: "sandra-bullock-give-up", filename: "sandra-bullock-give-up.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
      { name: "jonah-hill-ok", filename: "jonah-hill-ok.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
    ],
  },
  {
    name: "Taylor Swift - Running Fast",
    emoji: "💖",
    emojis: [
      { name: "taylor-dancing", filename: "taylor-dancing.gif", reactionType: "Fast/Speedy/Gone", useCase: "For when things are moving fast or someone disappeared quickly" },
      { name: "taylor-shake-it-off", filename: "taylor-shake-it-off.gif", reactionType: "Fast/Speedy/Gone", useCase: "For when things are moving fast or someone disappeared quickly" },
    ],
  },
  {
    name: "Taylor Swift - Eye Roll",
    emoji: "💖",
    emojis: [
      { name: "taylor-eye-roll", filename: "taylor-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
      { name: "taylor-drunk-eye-roll", filename: "taylor-drunk-eye-roll.gif", reactionType: "Eye Roll", useCase: "Expressing annoyance, sarcasm, or disbelief" },
    ],
  },
  {
    name: "Taylor Swift - Think Smart",
    emoji: "💖",
    emojis: [
      { name: "taylor-thinking", filename: "taylor-thinking.gif", reactionType: "Think/Smart", useCase: "Thinking, planning, or being clever" },
      { name: "taylor-hmm", filename: "taylor-hmm.gif", reactionType: "Think/Smart", useCase: "Thinking, planning, or being clever" },
    ],
  },
  {
    name: "Taylor Swift - WTF",
    emoji: "💖",
    emojis: [
      { name: "taylor-mind-blown", filename: "taylor-mind-blown.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
      { name: "taylor-shocked", filename: "taylor-shocked.gif", reactionType: "WTF/Shocked", useCase: "Mind blown, shocked, or confused reactions" },
    ],
  },
  {
    name: "Taylor Swift - Why?",
    emoji: "💖",
    emojis: [
      { name: "taylor-confused", filename: "taylor-confused.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
      { name: "taylor-why", filename: "taylor-why.gif", reactionType: "Why/Confused", useCase: "Questioning, confusion, or disbelief" },
    ],
  },
  {
    name: "Taylor Swift - Do Better",
    emoji: "💖",
    emojis: [
      { name: "taylor-disappointed", filename: "taylor-disappointed.gif", reactionType: "Do Better/Disappointed", useCase: "Expressing disappointment or encouraging improvement" },
      { name: "taylor-do-better", filename: "taylor-do-better.gif", reactionType: "Do Better/Disappointed", useCase: "Expressing disappointment or encouraging improvement" },
    ],
  },
  {
    name: "Taylor Swift - Ok",
    emoji: "💖",
    emojis: [
      { name: "taylor-thumbs-up", filename: "taylor-thumbs-up.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
      { name: "taylor-ok", filename: "taylor-ok.gif", reactionType: "Ok/Meh", useCase: "Reluctant agreement or lukewarm acceptance" },
    ],
  },
  {
    name: "Taylor Swift - This Is Great",
    emoji: "💖",
    emojis: [
      { name: "taylor-wow", filename: "taylor-wow.gif", reactionType: "Celebration/Excited", useCase: "Celebrating success or expressing excitement" },
      { name: "taylor-love", filename: "taylor-love.gif", reactionType: "Celebration/Excited", useCase: "Celebrating success or expressing excitement" },
    ],
  },
  {
    name: "Mamma Mia",
    emoji: "🎬",
    emojis: [
      { name: "mamma-mia-meryl", filename: "mamma-mia-meryl.gif", reactionType: "Mamma Mia", useCase: "ABBA-powered joy and drama" },
      { name: "mamma-mia-dance", filename: "mamma-mia-dance.gif", reactionType: "Mamma Mia", useCase: "ABBA-powered joy and drama" },
      { name: "mamma-mia-lol", filename: "mamma-mia-lol.gif", reactionType: "Mamma Mia", useCase: "ABBA-powered joy and drama" },
      { name: "mamma-mia-singing", filename: "mamma-mia-singing.gif", reactionType: "Mamma Mia", useCase: "ABBA-powered joy and drama" },
    ],
  },
  {
    name: "Hamilton",
    emoji: "🎭",
    emojis: [
      { name: "hamilton-lin", filename: "hamilton-lin.gif", reactionType: "Hamilton", useCase: "Revolutionary musical moments" },
      { name: "hamilton-work", filename: "hamilton-work.gif", reactionType: "Hamilton", useCase: "Revolutionary musical moments" },
      { name: "hamilton-king-george", filename: "hamilton-king-george.gif", reactionType: "Hamilton", useCase: "Revolutionary musical moments" },
      { name: "hamilton-daveed", filename: "hamilton-daveed.gif", reactionType: "Hamilton", useCase: "Revolutionary musical moments" },
    ],
  },
  {
    name: "The Eras Tour",
    emoji: "🎤",
    emojis: [
      { name: "eras-cruel-summer", filename: "eras-cruel-summer.gif", reactionType: "The Eras Tour", useCase: "Live concert Taylor Swift moments" },
      { name: "eras-ready", filename: "eras-ready.gif", reactionType: "The Eras Tour", useCase: "Live concert Taylor Swift moments" },
      { name: "eras-speak-now", filename: "eras-speak-now.gif", reactionType: "The Eras Tour", useCase: "Live concert Taylor Swift moments" },
      { name: "eras-concert", filename: "eras-concert.gif", reactionType: "The Eras Tour", useCase: "Live concert Taylor Swift moments" },
    ],
  },
  {
    name: "Grease",
    emoji: "🎸",
    emojis: [
      { name: "grease-olivia", filename: "grease-olivia.gif", reactionType: "Grease", useCase: "Greased lightning energy" },
      { name: "grease-love", filename: "grease-love.gif", reactionType: "Grease", useCase: "Greased lightning energy" },
      { name: "grease-shocked", filename: "grease-shocked.gif", reactionType: "Grease", useCase: "Greased lightning energy" },
      { name: "grease-dance", filename: "grease-dance.gif", reactionType: "Grease", useCase: "Greased lightning energy" },
    ],
  },
  {
    name: "Tommy",
    emoji: "🎹",
    emojis: [
      { name: "tommy-rock", filename: "tommy-rock.gif", reactionType: "Tommy", useCase: "Rock opera vibes" },
      { name: "tommy-elton", filename: "tommy-elton.gif", reactionType: "Tommy", useCase: "Rock opera vibes" },
    ],
  },
  {
    name: "Popstar",
    emoji: "🎬",
    emojis: [
      { name: "popstar-cooking", filename: "popstar-cooking.gif", reactionType: "Popstar", useCase: "Comedy music moments" },
      { name: "popstar-unicorn", filename: "popstar-unicorn.gif", reactionType: "Popstar", useCase: "Comedy music moments" },
      { name: "popstar-concert", filename: "popstar-concert.gif", reactionType: "Popstar", useCase: "Comedy music moments" },
      { name: "popstar-dance", filename: "popstar-dance.gif", reactionType: "Popstar", useCase: "Comedy music moments" },
    ],
  },
  {
    name: "Idiocracy",
    emoji: "🧠",
    emojis: [
      { name: "idiocracy-president", filename: "idiocracy-president.gif", reactionType: "Idiocracy", useCase: "Dystopian comedy reactions" },
      { name: "idiocracy-lol", filename: "idiocracy-lol.gif", reactionType: "Idiocracy", useCase: "Dystopian comedy reactions" },
      { name: "idiocracy-wow", filename: "idiocracy-wow.gif", reactionType: "Idiocracy", useCase: "Dystopian comedy reactions" },
      { name: "idiocracy-reaction", filename: "idiocracy-reaction.gif", reactionType: "Idiocracy", useCase: "Dystopian comedy reactions" },
    ],
  },
  {
    name: "Spaceballs",
    emoji: "🚀",
    emojis: [
      { name: "spaceballs-helmet", filename: "spaceballs-helmet.gif", reactionType: "Spaceballs", useCase: "Mel Brooks space comedy" },
      { name: "spaceballs-reaction", filename: "spaceballs-reaction.gif", reactionType: "Spaceballs", useCase: "Mel Brooks space comedy" },
      { name: "spaceballs-pizza", filename: "spaceballs-pizza.gif", reactionType: "Spaceballs", useCase: "Mel Brooks space comedy" },
      { name: "spaceballs-vespa", filename: "spaceballs-vespa.gif", reactionType: "Spaceballs", useCase: "Mel Brooks space comedy" },
    ],
  },
  {
    name: "Parks and Rec",
    emoji: "📺",
    emojis: [
      { name: "pawnee-talk", filename: "pawnee-talk.gif", reactionType: "Parks & Rec", useCase: "Various Leslie Knope and Parks reactions" },
      { name: "pawnee-deal", filename: "pawnee-deal.gif", reactionType: "Parks & Rec", useCase: "Various Leslie Knope and Parks reactions" },
      { name: "pawnee-thanks", filename: "pawnee-thanks.gif", reactionType: "Parks & Rec", useCase: "Various Leslie Knope and Parks reactions" },
      { name: "pawnee-excited", filename: "pawnee-excited.gif", reactionType: "Parks & Rec", useCase: "Various Leslie Knope and Parks reactions" },
      { name: "pawnee-breakfast", filename: "pawnee-breakfast.gif", reactionType: "Parks & Rec", useCase: "Various Leslie Knope and Parks reactions" },
    ],
  },
  {
    name: "The Good Place",
    emoji: "😇",
    emojis: [
      { name: "tgp-eleanor", filename: "tgp-eleanor.gif", reactionType: "The Good Place", useCase: "Forking good reactions from The Good Place" },
      { name: "tgp-holy-fork", filename: "tgp-holy-fork.gif", reactionType: "The Good Place", useCase: "Forking good reactions from The Good Place" },
      { name: "tgp-janet", filename: "tgp-janet.gif", reactionType: "The Good Place", useCase: "Forking good reactions from The Good Place" },
      { name: "tgp-chidi", filename: "tgp-chidi.gif", reactionType: "The Good Place", useCase: "Forking good reactions from The Good Place" },
      { name: "tgp-frustrated", filename: "tgp-frustrated.gif", reactionType: "The Good Place", useCase: "Forking good reactions from The Good Place" },
    ],
  },
  {
    name: "Brooklyn 99",
    emoji: "🚔",
    emojis: [
      { name: "b99-interested", filename: "b99-interested.gif", reactionType: "Brooklyn 99", useCase: "Noice! Brooklyn 99 reactions" },
      { name: "b99-yes", filename: "b99-yes.gif", reactionType: "Brooklyn 99", useCase: "Noice! Brooklyn 99 reactions" },
      { name: "b99-dance", filename: "b99-dance.gif", reactionType: "Brooklyn 99", useCase: "Noice! Brooklyn 99 reactions" },
      { name: "b99-awkward", filename: "b99-awkward.gif", reactionType: "Brooklyn 99", useCase: "Noice! Brooklyn 99 reactions" },
      { name: "b99-noice", filename: "b99-noice.gif", reactionType: "Brooklyn 99", useCase: "Noice! Brooklyn 99 reactions" },
    ],
  },
  {
    name: "Mean Girls",
    emoji: "💅",
    emojis: [
      { name: "mg-awkward", filename: "mg-awkward.gif", reactionType: "Mean Girls", useCase: "That is so fetch! Mean Girls moments" },
      { name: "mg-fetch", filename: "mg-fetch.gif", reactionType: "Mean Girls", useCase: "That is so fetch! Mean Girls moments" },
      { name: "mg-idk", filename: "mg-idk.gif", reactionType: "Mean Girls", useCase: "That is so fetch! Mean Girls moments" },
      { name: "mg-obsessed", filename: "mg-obsessed.gif", reactionType: "Mean Girls", useCase: "That is so fetch! Mean Girls moments" },
      { name: "mg-butter", filename: "mg-butter.gif", reactionType: "Mean Girls", useCase: "That is so fetch! Mean Girls moments" },
    ],
  },
  {
    name: "Clueless",
    emoji: "💋",
    emojis: [
      { name: "clueless-thinking", filename: "clueless-thinking.gif", reactionType: "Clueless", useCase: "As if! Clueless reactions" },
      { name: "clueless-ugh", filename: "clueless-ugh.gif", reactionType: "Clueless", useCase: "As if! Clueless reactions" },
      { name: "clueless-asif", filename: "clueless-asif.gif", reactionType: "Clueless", useCase: "As if! Clueless reactions" },
      { name: "clueless-whatever", filename: "clueless-whatever.gif", reactionType: "Clueless", useCase: "As if! Clueless reactions" },
      { name: "clueless-shopping", filename: "clueless-shopping.gif", reactionType: "Clueless", useCase: "As if! Clueless reactions" },
    ],
  },
  {
    name: "Legally Blonde",
    emoji: "💖",
    emojis: [
      { name: "elle-hard", filename: "elle-hard.gif", reactionType: "Legally Blonde", useCase: "What, like it's hard? Elle Woods energy" },
      { name: "elle-endorphins", filename: "elle-endorphins.gif", reactionType: "Legally Blonde", useCase: "What, like it's hard? Elle Woods energy" },
      { name: "elle-snap", filename: "elle-snap.gif", reactionType: "Legally Blonde", useCase: "What, like it's hard? Elle Woods energy" },
      { name: "elle-wave", filename: "elle-wave.gif", reactionType: "Legally Blonde", useCase: "What, like it's hard? Elle Woods energy" },
      { name: "elle-happy", filename: "elle-happy.gif", reactionType: "Legally Blonde", useCase: "What, like it's hard? Elle Woods energy" },
    ],
  },
  {
    name: "Devil Wears Prada",
    emoji: "👠",
    emojis: [
      { name: "miranda-look", filename: "miranda-look.gif", reactionType: "Devil Wears Prada", useCase: "Miranda Priestly iconic moments" },
      { name: "miranda-ready", filename: "miranda-ready.gif", reactionType: "Devil Wears Prada", useCase: "Miranda Priestly iconic moments" },
      { name: "miranda-disappoint", filename: "miranda-disappoint.gif", reactionType: "Devil Wears Prada", useCase: "Miranda Priestly iconic moments" },
      { name: "miranda-shades", filename: "miranda-shades.gif", reactionType: "Devil Wears Prada", useCase: "Miranda Priestly iconic moments" },
      { name: "miranda-thatsall", filename: "miranda-thatsall.gif", reactionType: "Devil Wears Prada", useCase: "Miranda Priestly iconic moments" },
    ],
  },
] as const;

function countEmojis(cats: readonly Category[]): number {
  return cats.reduce((sum, cat) => sum + cat.emojis.length, 0);
}

export const TOTAL_EMOJI_COUNT = countEmojis(categories);
