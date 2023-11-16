import { PreviewOffer } from './offer';

export type SortingType = 'POPULAR' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'TOP_RATED_FIRST';

export type SortingElement = {
  message: string;
  algorithm: (a: PreviewOffer, b: PreviewOffer) => number;
};

export type Sorting = {
  [k in SortingType]: SortingElement;
};
