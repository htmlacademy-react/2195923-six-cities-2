import { store } from '../store/stores';
import { AuthorizationStatus } from '../const';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
