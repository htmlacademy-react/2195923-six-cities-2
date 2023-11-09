import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { PreviewOffer } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import { PlaceCardType } from '../../const';

type FavoritesPageProps = {
  offers: PreviewOffer[];
}

function FavoritesPage({offers} : FavoritesPageProps) : React.JSX.Element {

  function renderFavoritePlaceListByCity(offersByCities: {[key: string]: PreviewOffer[]}, city: string) {
    const favoritePlaceListByCity : React.JSX.Element[] = [];
    for (const offerByCity of offersByCities[city]) {
      favoritePlaceListByCity.push(<PlaceCard offer={offerByCity} type={PlaceCardType.Favorite} key={offerByCity.id}/>);
    }
    return favoritePlaceListByCity;
  }

  function renderFavoriteList(offersByCities: {[key: string]: PreviewOffer[]}) {
    const favoriteList : React.JSX.Element[] = [];

    for (const city of Object.keys(offersByCities)) {
      favoriteList.push(
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {renderFavoritePlaceListByCity(offersByCities, city)}
          </div>
        </li>
      );
    }
    return favoriteList;
  }

  const offersByCities = offers.reduce((group: {[key: string]: PreviewOffer[]}, offer) => {
    if (!group[offer.city.name]) {
      group[offer.city.name] = [];
    }
    group[offer.city.name].push(offer);
    return group;
  }, {});

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities: Favorites places</title>
      </Helmet>
      <Header isNavRequired isAuth={false}/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {renderFavoriteList(offersByCities)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
