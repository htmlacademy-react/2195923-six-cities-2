import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  navigateTo: string;
  children: React.JSX.Element;
};

function PrivateRoute({children, navigateTo}: PrivateRouteProps): React.JSX.Element {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to={navigateTo} />;
}

export default PrivateRoute;
