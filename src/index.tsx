import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {MockData} from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount = {MockData.PlacesCount}/>
  </React.StrictMode>
);
