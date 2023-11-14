import { store } from '../store/stores';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
