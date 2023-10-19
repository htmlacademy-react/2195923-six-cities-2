import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../data';

type AppProps = {
  placesCount: number;
}

function App({placesCount} : AppProps) : React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesCount={placesCount}/>} />
        <Route path={AppRoute.Login} element={<PrivateRoute navigateTo={AppRoute.Main}><LoginPage /></PrivateRoute>} />
        <Route path={AppRoute.Favorite} element={<PrivateRoute navigateTo={AppRoute.Login}><FavoritesPage /></PrivateRoute>} />
        <Route path={`${AppRoute.Offer}/:id`} element={<OfferPage />} />
        <Route path={AppRoute.Error} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
