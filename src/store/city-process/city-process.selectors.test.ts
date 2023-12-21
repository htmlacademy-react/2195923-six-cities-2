import { describe, it } from 'vitest';
import { NameSpace } from '../../const';
import { random} from 'faker';
import { getCity } from './city-process.selectors';
import { CityName } from '../../types/offer';

describe('CityProcess selectors', () => {
  const state = {
    [NameSpace.City]: {
      city: random.arrayElement(['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf']) as CityName,
    },
  };

  it('should return city from state', () => {
    const {city} = state[NameSpace.City];
    const result = getCity(state);
    expect(result).toBe(city);
  });
});
