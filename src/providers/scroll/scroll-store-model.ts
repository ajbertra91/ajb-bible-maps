export type JPart = "j1a" | "j1b";

export interface JourneyPart {
  title: string;
  position: number;
  color: string;
}

export interface Journey {
  j1a: JourneyPart;
  j1b: JourneyPart;
}
