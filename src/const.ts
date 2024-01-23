import { City as TCity, PreviewOffer } from './types/offer';
import { Sorting } from './types/sorting';

export const PlaceCardType = {
  Favorite: 'favorites',
  City: 'cities',
  Near: 'near-places'
};

export const NUMBER_PERCENT_IN_ONE_STAR = 20;
export const MAX_RATING = 5;
export const MAX_COUNT_IMAGES_OFFERS = 6;
export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 300;
export const MAX_COMMENTS_COUNT = 10;

export const MapIconURL = {
  activeIcon: './../../public/img/pin-active.svg',
  passiveIcon: './../../public/img/pin.svg',
};

export const Cities: TCity[] = [
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

export const SortingType: Sorting = {
  POPULAR: {
    type: 'POPULAR',
    message:  'Popular',
    algorithm: () => 1,
  },
  PRICE_LOW_TO_HIGH: {
    type: 'PRICE_LOW_TO_HIGH',
    message: 'Price: low to high',
    algorithm: (a: PreviewOffer, b: PreviewOffer) => a.price - b.price,
  },
  PRICE_HIGH_TO_LOW: {
    type: 'PRICE_HIGH_TO_LOW',
    message: 'Price: high to low',
    algorithm: (a: PreviewOffer, b: PreviewOffer) => b.price - a.price,
  },
  TOP_RATED_FIRST: {
    type: 'TOP_RATED_FIRST',
    message: 'Top rated first',
    algorithm: (a: PreviewOffer, b: PreviewOffer) => b.rating - a.rating,
  }
};

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Reviews = '/comments',
  Logout = '/logout',
  Favorite = '/favorite',
}

export enum AuthorizationStatus {
  Unknown = 'Unknown',
  Auth = 'Auth',
  NoAuth = 'NoAuth',
}


export enum RatingLabel {
  Perfect = 'perfect',
  Good = 'good',
  NotBad = 'not bad',
  Badly = 'badly',
  Terribly = 'terribly',
}

export enum NameSpace {
  User = 'USER',
  Offer = 'OFFER',
  Review = 'REVIEW',
  City = 'CITY',
}

