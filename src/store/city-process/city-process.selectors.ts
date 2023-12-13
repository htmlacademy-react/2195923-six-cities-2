import {NameSpace} from '../../const';
import { CityName } from '../../types/offer';
import {State} from '../../types/state';

export const getCity = (state: State): CityName => state[NameSpace.City].city;
