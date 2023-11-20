import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store/stores';
import { fullOffers, previewOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { fetchOffersAction } from './store/actions/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        fullOffers = {fullOffers}
        previewOffers={previewOffers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
