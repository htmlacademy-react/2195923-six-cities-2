import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import PrivateRoute from '../private/private-route';
import { AppRoute } from '../../app-route';
import { useAppSelector } from '../../hooks/use-app-selector';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getOffersDataLoading } from '../../store/offer-data/offer-data.selectors';
import { getAuthorizationStatusLoading } from '../../store/user-process/user-process.selectors';

function App() : React.JSX.Element {
  const isOffersDataLoadingStatus = useAppSelector(getOffersDataLoading);
  const isAuthorizationLoadingStatus = useAppSelector(getAuthorizationStatusLoading);

  if (isOffersDataLoadingStatus ||
    isAuthorizationLoadingStatus) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage/>} />
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route path={AppRoute.Favorite} element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferPage />}
          />
          <Route path={AppRoute.Error} element={<NotFoundPage />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

