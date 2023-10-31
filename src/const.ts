import { CenterOfCity } from './types/center-city';

const MockData = {
  PlacesCount: 5,
};

const PlaceCardType = {
  Favorite: 'favorites',
  City: 'cities',
  Near: 'near-places'
};

const NUMBER_PERCENT_IN_ONE_STAR = 20;

const CenterCity: CenterOfCity = {
  'Amsterdam': {
    lat: 52.37,
    lng: 4.88,
  },
};

const MapIconURL = {
  activeIcon: './../../public/img/pin-active.svg',
  passiveIcon: './../../public/img/pin.svg',
};

export {
  MockData,
  PlaceCardType,
  NUMBER_PERCENT_IN_ONE_STAR,
  CenterCity,
  MapIconURL
};