import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store/stores';
import { fullOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { fetchOffersAction } from './store/actions/api-actions';
import { getAuthorizationStatusAction } from './store/actions/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(getAuthorizationStatusAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        fullOffers = {fullOffers}
        previewOffers={store.getState().offers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
