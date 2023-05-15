export interface Location {
  lat: number;
  lng: number;
}

export interface NavState {
  origin: {
    location: Location;
    description: string;
  } | null;
  destination: string | null;
  travelTimeInformation: number | null;
}