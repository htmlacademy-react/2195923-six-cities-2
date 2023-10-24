import { Offer } from '../types/offer';

const offers: Offer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.25,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 4,
    goods: [
      'Heating',
      'Towels',
      'Wi-Fi'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: true,
    },
    images: [
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg',
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
    ],
    maxAdults: 6
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 34.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 34.673877537499948,
      zoom: 8
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.87,
    description: 'Very cool room',
    bedrooms: 1,
    goods: [
      'Kitchen',
      'Cabel TV'
    ],
    host: {
      name: 'Boris Nikolaev',
      avatarUrl: `https://ui-avatars.com/api/?background=${crypto.randomUUID()}`,
      isPro: false,
    },
    images: [
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg'
    ],
    maxAdults: 1
  },
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496380,
      longitude: 4.673877537499999,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.25,
    description: 'Hotel in the City',
    bedrooms: 1,
    goods: [

    ],
    host: {
      name: 'Ludvig',
      avatarUrl: `https://ui-avatars.com/api/?background=${crypto.randomUUID()}`,
      isPro: false,
    },
    images: [
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg',
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
    ],
    maxAdults: 1
  },
  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938498888,
      longitude: 4.6738775378888,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.25,
    description: 'Hotel in the center of the city',
    bedrooms: 4,
    goods: [
      'Heating',
      'Towels',
      'Wi-Fi',
      'Dishwasher',
      'Coffee machine'
    ],
    host: {
      name: 'Great Gatsby',
      avatarUrl: `https://ui-avatars.com/api/?background=${crypto.randomUUID()}`,
      isPro: false,
    },
    images: [
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg',
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
    ],
    maxAdults: 1
  },
];

export {offers};
