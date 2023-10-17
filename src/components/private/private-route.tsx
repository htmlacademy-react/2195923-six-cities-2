import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: React.JSX.Element;
};

function PrivateRoute({children}: PrivateRouteProps): React.JSX.Element {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
