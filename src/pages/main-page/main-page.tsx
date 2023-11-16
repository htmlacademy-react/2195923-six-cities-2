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
  const cityName = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();

  function getOffersByCity() {
    return offers.filter((offer) => offer.city.name === cityName);
  }

  let offersByCity = getOffersByCity();

  const [activeCard, setActiveCard] = useState(' ');
  const [sortType, setSortType] = useState(SortingType.POPULAR.message);
  const [sortingAndFilteringOffers, setSortingAndFilteringOffers] = useState(offersByCity);
  const [filteringOffers, setFilteringOffers] = useState(offersByCity);

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
    offersByCity = offers.filter((offer) => offer.city.name === evt.currentTarget.textContent);
    setSortingAndFilteringOffers(offersByCity);
    setFilteringOffers(structuredClone(offersByCity));
    setSortType(SortingType.POPULAR.message);
  };

  const handleSortingClick = (type: string) => {
    switch(type) {
      case SortingType.POPULAR.message:
        setSortingAndFilteringOffers(structuredClone(filteringOffers));
        break;
      case SortingType.PRICE_HIGH_TO_LOW.message:
        setSortingAndFilteringOffers(sortingAndFilteringOffers.sort(SortingType.PRICE_HIGH_TO_LOW.algorithm));
        break;
      case SortingType.PRICE_LOW_TO_HIGH.message:
        setSortingAndFilteringOffers(sortingAndFilteringOffers.sort(SortingType.PRICE_LOW_TO_HIGH.algorithm));
        break;
      case SortingType.TOP_RATED_FIRST.message:
        setSortingAndFilteringOffers(sortingAndFilteringOffers.sort(SortingType.TOP_RATED_FIRST.algorithm));
        break;
    }
    setSortType(type);
  };

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
              <b className="places__found">{sortingAndFilteringOffers.length} places to stay in {cityName}</b>
              <Sorting onSortTypeClick={handleSortingClick} type={sortType}/>
              <PlaceCardList offers={sortingAndFilteringOffers} type={PlaceCardType.City} onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} />
            </section>
            <div className="cities__right-section">
              <Map cityName={cityName} offers={sortingAndFilteringOffers} activeCard={activeCard} type={'cities'}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
