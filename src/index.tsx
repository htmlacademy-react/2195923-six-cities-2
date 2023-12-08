import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './components/app/app';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/stores';
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
        previewOffers={store.getState().offers}
      />
    </Provider>
  </React.StrictMode>
);
