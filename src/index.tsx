import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/stores';
import { fullOffers, previewOffers } from './mocks/offers';
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
      <ToastContainer />
      <App
        fullOffers = {fullOffers}
        previewOffers={previewOffers}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
