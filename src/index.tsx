import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store/stores';
import { fetchOffersAction, loadNearbyOffersAction, loadOfferByIDAction, loadReviewsAction } from './store/actions/api-actions';
import { getAuthorizationStatusAction } from './store/actions/api-actions';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from './app-route';
import MainPage from './pages/main-page/main-page';
import PrivateRoute from './components/private/private-route';
import FavoritesPage from './pages/favorites-page/favorites-page';
import LoginPage from './pages/login-page/login-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import OfferPage from './pages/offer-page/offer-page';
import { HelmetProvider } from 'react-helmet-async';


store.dispatch(getAuthorizationStatusAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <MainPage/>,
    loader: () => store.dispatch(fetchOffersAction()),
  },
  {
    path: AppRoute.Login,
    element: <LoginPage />,
  },
  {
    path: AppRoute.Favorite,
    element: <PrivateRoute><FavoritesPage /></PrivateRoute>,
  },
  {
    path: `${AppRoute.Offer}/:id`,
    element: <OfferPage />,
    loader: ({params}) => {
      if (params.id) {
        return Promise.all([
          store.dispatch(loadOfferByIDAction(params.id)),
          store.dispatch(loadNearbyOffersAction(params.id)),
          store.dispatch(loadReviewsAction(params.id))
        ]);
      }
      return null;
    }
  },
  {
    path: AppRoute.Error,
    element: <NotFoundPage />,
  }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <HelmetProvider>
        <RouterProvider router={router}/>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
