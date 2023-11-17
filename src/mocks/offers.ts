// Моки пока не удалял, так как они пока еще передаются в компонент App

import { FullOffer } from '../types/offer';
import { PreviewOffer } from '../types/offer';

const previewOffers: PreviewOffer[] = [
  {
    id: crypto.randomUUID(),
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.25,
    previewImage: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC'
  },
  {
    id: crypto.randomUUID(),
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.87,
    previewImage: 'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.25,
    previewImage: 'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC'
  },
  {
    id: crypto.randomUUID(),
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.25,
    previewImage: 'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg'
  },
  {
    id: crypto.randomUUID(),
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 147,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.3
  },
  {
    id: crypto.randomUUID(),
    title: 'Prinsengracht',
    type: 'room',
    price: 100,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.217402,
      longitude: 6.7693140000000005,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3
  }
];

const fullOffers: FullOffer[] = [
  {
    id: previewOffers[0].id,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
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
    id: previewOffers[1].id,
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
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
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg'
    ],
    maxAdults: 1
  },
  {
    id: previewOffers[2].id,
    title: 'Canal View Prinsengracht',
    type: 'hotel',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
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
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg',
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
    ],
    maxAdults: 1
  },
  {
    id: previewOffers[3].id,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
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
      avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
      isPro: false,
    },
    images: [
      'https://media.admagazine.ru/photos/61408b2f4311246f36873963/16:9/w_1280,c_limit/w2000%20-%202020-07-14T164056.159.jpeg',
      'https://www.atorus.ru/sites/default/files/styles/head_carousel/public/2021-09/fd1c3f.jpg.webp?itok=KQVu0gUC',
    ],
    maxAdults: 1
  },
];

export {fullOffers, previewOffers};
