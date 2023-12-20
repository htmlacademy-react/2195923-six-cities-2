import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationStatusLoading = (state: Pick<State, NameSpace.User>): boolean => state[NameSpace.User].isAuthorizationStatusLoading;
export const getUserData = (state: Pick<State, NameSpace.User>): UserData => state[NameSpace.User].userData;
