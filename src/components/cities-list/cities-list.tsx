import {Link} from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { Cities } from '../../const';
import { City, CityName } from '../../types/offer';

type CitiesListProps = {
  currentCity: CityName;
  onCityClick: React.MouseEventHandler<HTMLElement>;
};

function CitiesList({currentCity, onCityClick} : CitiesListProps) {

  function getCityListItem(city: CityName) {
    return (
      <li className="locations__item" key={city}>
        <Link className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`} to={AppRoute.Main} onClick={onCityClick}>
          <span>{city}</span>
        </Link>
      </li>
    );
  }

  function getCityList(cities: City[]) {
    return cities.map((city) => getCityListItem(city.name));
  }

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {getCityList(Cities)}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
