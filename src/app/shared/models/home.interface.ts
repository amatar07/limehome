export interface HomeInterface {
  location: LocationInterface;
  propertyId: string;
  name: string;
  price: number;
  distanceFromCenter: number;
  selected?: boolean;
}


export interface LocationInterface {
  lat: number;
  long: number;
}
