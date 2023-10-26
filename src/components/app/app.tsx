import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../data';
import { HelmetProvider } from 'react-helmet-async';
import { FullOffer, PreviewOffer } from '../../types/offer';
import { Review } from '../../types/review';

type AppProps = {
  fullOffers: FullOffer[];
  previewOffers: PreviewOffer[];
  reviews: Review[];
}

function App({fullOffers, previewOffers, reviews} : AppProps) : React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage offers={previewOffers}/>} />
          <Route path={AppRoute.Login} element={<PrivateRoute navigateTo={AppRoute.Main}><LoginPage /></PrivateRoute>} />
          <Route path={AppRoute.Favorite} element={<PrivateRoute navigateTo={AppRoute.Login}><FavoritesPage offers={previewOffers.filter((offer : PreviewOffer) => offer.isFavorite)}/></PrivateRoute>} />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage offers={fullOffers} nearOffers={previewOffers} reviews={reviews} />}
          />
          <Route path={AppRoute.Error} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
