import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fullOffers, previewOffers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      fullOffers = {fullOffers}
      previewOffers={previewOffers}
      reviews = {reviews}
    />
  </React.StrictMode>
);
