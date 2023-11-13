import { City } from './types/offer';

const MockData = {
  PlacesCount: 5,
};

const PlaceCardType = {
  Favorite: 'favorites',
  City: 'cities',
  Near: 'near-places'
};

const NUMBER_PERCENT_IN_ONE_STAR = 20;

const MapIconURL = {
  activeIcon: './../../public/img/pin-active.svg',
  passiveIcon: './../../public/img/pin.svg',
};

const Cities: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    }
  },
];

const SortingType = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
};

export {
  MockData,
  PlaceCardType,
  NUMBER_PERCENT_IN_ONE_STAR,
  MapIconURL,
  Cities,
  SortingType
};
