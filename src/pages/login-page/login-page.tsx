import { Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { AppRoute } from '../../app-route';
import { useAppSelector } from '../../hooks/use-app-selector';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import Auth from '../../components/auth/auth';

function LoginPage() : React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);


  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities: Login</title>
      </Helmet>
      <Header isNavRequired={false}/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <Auth />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

