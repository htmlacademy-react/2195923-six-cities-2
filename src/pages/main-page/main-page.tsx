import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import Header from '../../components/header/header';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import Sorting from '../../components/sorting/sorting';
import { PlaceCardType, SortingType } from '../../const';
import { CityName} from '../../types/offer';
import { changeCity } from '../../store/actions/action';


function MainPage() : React.JSX.Element {
  const [activeCard, setActiveCard] = useState(' ');
  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  const [sortingOffers, setSortingOffers] = useState(offers.filter((offer) => offer.city.name === cityName));

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
    setSortingOffers(offers.filter((offer) => offer.city.name === evt.currentTarget.textContent));
  };

  const handleSortingClick = (sortType: string) => {
    switch(sortType) {
      case SortingType.POPULAR:
        setSortingOffers(offers.filter((offer) => offer.city.name === cityName));
        break;
      case SortingType.PRICE_HIGH_TO_LOW:
        setSortingOffers(sortingOffers.sort((a, b) => Number(a.price < b.price)));
        break;
      case SortingType.PRICE_LOW_TO_HIGH:
        setSortingOffers(sortingOffers.sort((a, b) => Number(a.price > b.price)));
        break;
      case SortingType.TOP_RATED_FIRST:
        setSortingOffers(sortingOffers.sort((a, b) => Number(a.rating < b.rating)));
        break;
    }
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
              <b className="places__found">{sortingOffers.length} places to stay in {cityName}</b>
              <Sorting onSortTypeClick={handleSortingClick}/>
              <PlaceCardList offers={sortingOffers} type={PlaceCardType.City} onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} />
            </section>
            <div className="cities__right-section">
              <Map cityName={cityName} offers={sortingOffers} activeCard={activeCard} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
