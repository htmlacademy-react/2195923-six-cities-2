import {Link} from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { store } from '../../store/stores';
import { logoutAction } from '../../store/actions/api-actions';

type HeaderProps = {
  isNavRequired: boolean;
  isAuth?: AuthorizationStatus;
}

function Header({isNavRequired, isAuth}: HeaderProps) : React.JSX.Element {
  const userData = useAppSelector((state) => state.userData);

  const onLogoutClick = () => {
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isNavRequired &&
            <nav className="header__nav">
              {isAuth === AuthorizationStatus.Auth ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorite}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userData.email}</span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="" onClick={onLogoutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
                :
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>}
            </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
