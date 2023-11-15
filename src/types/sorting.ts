import { PreviewOffer } from './offer';

export type SortingType = 'POPULAR' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'TOP_RATED_FIRST';

export type Sorting = {
  [k in SortingType]: {
    message: string;
    algorithm: (a: PreviewOffer, b: PreviewOffer) => number;
  };
};
