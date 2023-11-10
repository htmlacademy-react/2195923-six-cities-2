import {Link} from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { Cities } from '../../const';
import { CityName } from '../../types/offer';

type CitiesListProps = {
  onCityClick: React.MouseEventHandler<HTMLElement>;
};

// добавить активному пункту класс tabs__item--active
function CitiesList({onCityClick} : CitiesListProps) {

  function getCityListItem(city: CityName) {
    return (
      <li className="locations__item" key={city}>
        <Link className="locations__item-link tabs__item" to={AppRoute.Main} onClick={onCityClick}>
          <span>{city}</span>
        </Link>
      </li>
    );
  }

  function getCityList(cities: CityName[]) {
    return cities.map((city) => getCityListItem(city));
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
