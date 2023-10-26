import {Navigate} from 'react-router-dom';
import { AppRoute } from '../../app-route';

type PrivateRouteProps = {
  children: React.JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): React.JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
