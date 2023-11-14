import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import Header from '../../components/header/header';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { PlaceCardType } from '../../const';
import { CityName} from '../../types/offer';
import { changeCity } from '../../store/actions/action';


function MainPage() : React.JSX.Element {
  const [activeCard, setActiveCard] = useState(' ');
  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const handlePlaceCardMouseEnter = (evt : React.MouseEvent) => {
    evt.preventDefault();
    const id = evt.currentTarget.getAttribute('data-id');
    if (id !== null) {
      setActiveCard(id);
    }
  };

  const handlePlaceCardMouseLeave = (evt : React.MouseEvent) => {
    evt.preventDefault();
    setActiveCard(' ');
  };

  const handleCityClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeCity(evt.currentTarget.textContent as CityName));
  };

  function getOffersByCity() {
    return offers.filter((offer) => offer.city.name === cityName);
  }

  const offersInCity = getOffersByCity();

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header isNavRequired isAuth={false}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={cityName} onCityClick={handleCityClick}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInCity.length} places to stay in {cityName}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlaceCardList offers={offersInCity} type={PlaceCardType.City} onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} />
            </section>
            <div className="cities__right-section">
              <Map cityName={cityName} offers={offersInCity} activeCard={activeCard} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
