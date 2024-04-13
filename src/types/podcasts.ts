export interface Timestamp {
  minute?: number;
  second?: number;
}

export interface Podcast {
  title: string;
  url: string;
  skipIntro?: Timestamp;
  skipOutro?: Timestamp;
}
