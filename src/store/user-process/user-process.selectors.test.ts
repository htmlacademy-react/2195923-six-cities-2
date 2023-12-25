import { describe, it } from 'vitest';
import { AuthorizationStatus, NameSpace } from '../../const';
import { datatype, internet, random, name, image } from 'faker';
import { getAuthorizationStatus, getAuthorizationStatusLoading, getUserData } from './user-process.selectors';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: random.arrayElement([AuthorizationStatus.Unknown, AuthorizationStatus.NoAuth, AuthorizationStatus.Auth]),
      isAuthorizationStatusLoading: datatype.boolean(),
      userData: {
        name: `${name.firstName()} ${name.lastName()}`,
        avatarUrl: image.avatar(),
        isPro: datatype.boolean(),
        email: internet.email(),
        token: datatype.uuid(),
      }
    },
  };

  it('should return AuthorizationStatus from state', () => {
    const {authorizationStatus} = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return isAuthorizationStatusLoading from state', () => {
    const {isAuthorizationStatusLoading} = state[NameSpace.User];
    const result = getAuthorizationStatusLoading(state);
    expect(result).toBe(isAuthorizationStatusLoading);
  });

  it('should return userData from state', () => {
    const {userData} = state[NameSpace.User];
    const result = getUserData(state);
    expect(result).toEqual(userData);
  });
});

