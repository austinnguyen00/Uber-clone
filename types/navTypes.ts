import { Point } from "react-native-google-places-autocomplete";

export interface Origin {
  location: Point | undefined;
  description: string;
}

export interface Destination {
  location: Point | undefined;
  description: string;
}

export interface TravelTimeInformation {
  distance: TravelTimeInformationObject | null;
  duration: TravelTimeInformationObject | null;
  duration_in_traffic: TravelTimeInformationObject | null;
  status: string;
}

export interface TravelTimeInformationObject {
  text: string;
  value: number;
}

export interface NavState {
  origin: Origin | null;
  destination: Destination | null;
  travelTimeInformation: TravelTimeInformation | null;
}