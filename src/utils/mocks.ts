import { Cities } from '../const';
import { City, FullOffer, PreviewOffer } from '../types/offer';
import { datatype, lorem, random, name, image } from 'faker';
import { Review } from '../types/review';

function createRandomCity(): City {
  return random.arrayElement(Cities);
}

export const makeFakeFullOffer = (): FullOffer => {
  const city = createRandomCity();
  return {
    id: datatype.uuid(),
    title: lorem.words(4),
    type: random.arrayElement(['apartment', 'room', 'house', 'hotel']),
    price: datatype.number(5000),
    city: city,
    location: {
      latitude: datatype.float({min: city.location.latitude - 0.002, max: city.location.latitude + 0.002, precision: 0.00001}),
      longitude: datatype.float({min: city.location.longitude - 0.002, max: city.location.longitude + 0.002, precision: 0.00001}),
      zoom: 13,
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({min: 0, max: 5, precision: 0.01}),
    description: lorem.sentence(12),
    bedrooms: datatype.number({min: 1, max: 5, precision: 1}),
    goods: datatype.array(datatype.number({min: 1, max: 5, precision: 1})) as string[],
    host: {
      name: `${name.firstName()} ${name.lastName()}`,
      avatarUrl: image.avatar(),
      isPro: datatype.boolean(),
    },
    images: new Array<string>(datatype.number({ min: 1, max: 8, precision: 1 })).fill('').map(() => {
      image.image();
    }) as unknown as string[],
    maxAdults: datatype.number({min: 1, max: 5, precision: 1}),
  } as FullOffer;
};

export const makeFakePreviewOffer = (): PreviewOffer => {
  const city = createRandomCity();
  return {
    id: datatype.uuid(),
    title: lorem.words(4),
    type: random.arrayElement(['apartment', 'room', 'house', 'hotel']),
    price: datatype.number(5000),
    city: city,
    location: {
      latitude: datatype.float({min: city.location.latitude - 0.002, max: city.location.latitude + 0.002, precision: 0.00001}),
      longitude: datatype.float({min: city.location.longitude - 0.002, max: city.location.longitude + 0.002, precision: 0.00001}),
      zoom: 13,
    },
    isFavorite: datatype.boolean(),
    isPremium: datatype.boolean(),
    rating: datatype.number({min: 0, max: 5, precision: 0.01}),
    previewImage: image.image(),
  } as PreviewOffer;
};


export const makeFakeReview = (): Review => ({
  id: datatype.uuid(),
  date: datatype.datetime() as unknown as string,
  user: {
    name: `${name.firstName()} ${name.lastName()}`,
    avatarUrl: image.avatar(),
    isPro: datatype.boolean(),
  },
  comment: lorem.sentence(12),
  rating: datatype.number({min: 0, max: 5, precision: 0.01}),
});
