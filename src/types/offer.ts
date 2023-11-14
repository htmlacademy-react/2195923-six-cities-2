export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Coordinate = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  name: CityName;
  location: Coordinate;
};

export type CityName = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type PreviewOffer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Coordinate;
  isFavorite?: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type FullOffer = Omit<PreviewOffer, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
};
