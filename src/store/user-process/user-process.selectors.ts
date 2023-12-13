import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationStatusLoading = (state: State): boolean => state[NameSpace.User].isAuthorizationStatusLoading;
export const getUserData = (state: State): UserData => state[NameSpace.User].userData;
