import { useState, useMemo, useEffect } from 'react';
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
import { SortingType as TSortingType } from '../../types/sorting';
import { getCity } from '../../store/city-process/city-process.selectors';
import { getOffers } from '../../store/offer-data/offer-data.selectors';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { changeCity } from '../../store/city-process/city-process.slice';
import { changeActiveCard } from '../../store/offer-data/offer-data.slice';

function MainPage() : React.JSX.Element {
  const cityName = useAppSelector(getCity);
  const offers = useAppSelector(getOffers);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const [sortType, setSortType] = useState<TSortingType>('POPULAR');

  const offersByCity = useMemo(() => offers.filter((offer) => offer.city.name === cityName), [cityName, offers]);
  const sortingOffers = useMemo(() => {
    switch(sortType) {
      case SortingType.POPULAR.type:
        return [...offersByCity];
      case SortingType.PRICE_HIGH_TO_LOW.type:
        return [...offersByCity].sort(SortingType.PRICE_HIGH_TO_LOW.algorithm);
      case SortingType.PRICE_LOW_TO_HIGH.type:
        return [...offersByCity].sort(SortingType.PRICE_LOW_TO_HIGH.algorithm);
      case SortingType.TOP_RATED_FIRST.type:
        return [...offersByCity].sort(SortingType.TOP_RATED_FIRST.algorithm);
      default:
        return [...offersByCity];
    }
  }, [offersByCity, sortType]);

  useEffect(() => {
    dispatch(changeActiveCard(''));
  }, [dispatch]);

  const handlePlaceCardMouseEnter = (evt : React.MouseEvent) => {
    evt.preventDefault();
    const id = evt.currentTarget.getAttribute('data-id');
    if (id !== null) {
      dispatch(changeActiveCard(id));
    }
  };

  const handlePlaceCardMouseLeave = (evt : React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeActiveCard(''));
  };

  const handleCityClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(changeCity(evt.currentTarget.textContent as CityName));
    setSortType('POPULAR');
  };

  const handleSortingClick = (type: TSortingType) => {
    setSortType(type);
  };

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header isNavRequired isAuth={authStatus}/>
      <main className={`page__main page__main--index ${sortingOffers.length ? '' : 'page__main--index-empty'} `} >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList currentCity={cityName} onCityClick={handleCityClick}/>
        <div className="cities">
          {sortingOffers.length ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{sortingOffers.length} places to stay in {cityName}</b>
                <Sorting onSortTypeClick={handleSortingClick} type={sortType}/>
                <PlaceCardList offers={sortingOffers} type={PlaceCardType.City} onMouseEnter={handlePlaceCardMouseEnter} onMouseLeave={handlePlaceCardMouseLeave} />
              </section>
              <div className="cities__right-section">
                <Map cityName={cityName} offers={sortingOffers} type={'cities'}/>
              </div>
            </div>
            :
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
