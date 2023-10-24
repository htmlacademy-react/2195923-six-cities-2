import { Review } from '../types/review';

const reviews: Review[] = [{
  id: crypto.randomUUID(),
  date: '2019-05-08T14:13:56.569Z',
  user: {
    name: 'Max',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: true,
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  rating: 4
},
{
  id: crypto.randomUUID(),
  date: '2020-06-09T15:14:56.569Z',
  user: {
    name: 'John',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: false,
  },
  comment: 'The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. ',
  rating: 3
},
{
  id: crypto.randomUUID(),
  date: '2021-07-10T16:15:56.569Z',
  user: {
    name: 'Albert',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: false,
  },
  comment: 'The building is green and from 18th century.',
  rating: 5
},
{
  id: crypto.randomUUID(),
  date: '2022-08-11T17:16:56.569Z',
  user: {
    name: 'Andrey',
    avatarUrl: `https://i.pravatar.cc/128?rnd=${Math.random()}`,
    isPro: true,
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 2
},
];

export {reviews};
