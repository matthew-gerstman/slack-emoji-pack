export interface Emoji {
  readonly name: string;
  readonly filename: string;
  readonly category: string;
  readonly reactionType: string;
  readonly useCase: string;
}

export interface Category {
  readonly name: string;
  readonly emoji: string;
  readonly emojis: readonly Emoji[];
}

