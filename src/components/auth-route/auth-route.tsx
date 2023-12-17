import {Navigate} from 'react-router-dom';
import { AppRoute } from '../../app-route';
import { useAppSelector } from '../../hooks/use-app-selector';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';

type AuthRouteProps = {
  children: React.JSX.Element;
};

function AuthRoute({children}: AuthRouteProps): React.JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus !== AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.Main} />;
}

export default AuthRoute;
