import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../data';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({offers} : AppProps) : React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage offers={offers}/>} />
          <Route path={AppRoute.Login} element={<PrivateRoute navigateTo={AppRoute.Main}><LoginPage /></PrivateRoute>} />
          <Route path={AppRoute.Favorite} element={<PrivateRoute navigateTo={AppRoute.Login}><FavoritesPage offers={offers.filter((offer : Offer) => offer.isFavorite)}/></PrivateRoute>} />
          <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage offer={offers[0]} />} />
          <Route path={AppRoute.Error} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
