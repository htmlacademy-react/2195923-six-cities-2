import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatusAction, loginAction, logoutAction } from '../actions/api-actions';
import { userProcess } from './user-process.slice';
import { image, name, datatype, internet } from 'faker';

describe('UserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      isAuthorizationStatusLoading: true,
      userData: {
        name: 'Boris',
        avatarUrl: '',
        isPro: true,
        email: 'boris@mail.eu',
        token: 'dfsfwerwefdsgdgsdsfsdf'
      },
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      isAuthorizationStatusLoading: true,
      userData: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AuthorizationStatus.Unknown", "isAuthorizationStatusLoading" to "true" with getAuthorizationStatusAction.pending', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      isAuthorizationStatusLoading: true,
      userData: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };

    const result = userProcess.reducer(undefined, getAuthorizationStatusAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AuthorizationStatus.Auth", "isAuthorizationStatusLoading" to "false", "userData" to user data with "getAuthorizationStatusAction.fulfilled"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      isAuthorizationStatusLoading: false,
      userData: {
        name: `${name.firstName()} ${name.lastName()}`,
        avatarUrl: image.avatar(),
        isPro: datatype.boolean(),
        email: internet.email(),
        token: datatype.uuid(),
      }
    };

    const result = userProcess.reducer(undefined, getAuthorizationStatusAction.fulfilled(expectedState.userData, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AuthorizationStatus.NoAuth", "isAuthorizationStatusLoading" to "false" with "getAuthorizationStatusAction.rejected"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthorizationStatusLoading: false,
      userData: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };

    const result = userProcess.reducer(undefined, getAuthorizationStatusAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AuthorizationStatus.Auth", "userData" to user data with "loginAction.fulfilled"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      isAuthorizationStatusLoading: true,
      userData: {
        name: `${name.firstName()} ${name.lastName()}`,
        avatarUrl: image.avatar(),
        isPro: datatype.boolean(),
        email: internet.email(),
        token: datatype.uuid(),
      }
    };

    const authData = {
      email: internet.email(),
      password: internet.password()
    };

    const result = userProcess.reducer(undefined, loginAction.fulfilled(expectedState.userData, '', authData));

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "AuthorizationStatus.NoAuth" with "logoutAction.fulfilled"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      isAuthorizationStatusLoading: true,
      userData: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };

    const result = userProcess.reducer(undefined, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
