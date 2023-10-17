import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PrivateRoute from '../private/private-route';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type AppProps = {
  placesCount: number;
}

function App({placesCount} : AppProps) : React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage placesCount={placesCount}/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/favorites' element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
        <Route path='/offer/:id' element={<OfferPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
