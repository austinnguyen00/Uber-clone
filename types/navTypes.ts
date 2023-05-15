import { Point } from "react-native-google-places-autocomplete";

export interface Origin {
  location: Point | undefined;
  description: string;
}

export interface Destination {
  location: Point | undefined;
  description: string;
}

export interface NavState {
  origin: Origin | null;
  destination: Destination | null;
  travelTimeInformation: number | null;
}