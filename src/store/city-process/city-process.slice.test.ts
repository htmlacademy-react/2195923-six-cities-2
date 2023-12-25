import { describe, it } from 'vitest';
import { changeCity, cityProcess } from './city-process.slice';
import { CityName } from '../../types/offer';

describe('CityProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: 'Hamburg' as CityName};

    const result = cityProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: 'Paris' as CityName};

    const result = cityProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change city with "changeCity" action', () => {
    const initialState = {city: 'Hamburg' as CityName};
    const expectedCity = {city: 'Dusseldorf'};

    const result = cityProcess.reducer(initialState, changeCity('Dusseldorf'));

    expect(result).toEqual(expectedCity);
  });

  it('should not change city with "changeCity" action and incorrect city', () => {
    const initialState = {city: 'Hamburg' as CityName};
    const expectedCity = {city: 'Hamburg'};

    const result = cityProcess.reducer(initialState, changeCity('Moscow'));

    expect(result).toEqual(expectedCity);
  });
});
