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
  distance: TravelTimeInformationObject;
  duration: TravelTimeInformationObject;
  duration_in_traffic: TravelTimeInformationObject;
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