export type JPart = "j1a" | "j1b" | "j2a" | "j3a" | "j4a";

export interface JourneyPart {
  title: string;
  position: number;
  color: string;
}

export interface Journey {
  type: number;
  j1a: JourneyPart;
  j1b: JourneyPart;
  j2a: JourneyPart;
  j3a: JourneyPart;
  j4a: JourneyPart;
}
