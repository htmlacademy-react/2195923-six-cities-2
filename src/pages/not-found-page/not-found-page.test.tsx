import { render, screen } from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { withHistory } from '../../utils/mock-components';

describe('Component: NotFoundPage', () => {
  it('should render correctly', () => {
    const expectedStatusText = '404 Not Found';
    const expectedStartActionText = /^Return to the/;
    const expectedFinishActionText = 'main page';
    const preparedComponent = withHistory(<NotFoundPage />);

    render(preparedComponent);

    expect(screen.getByText(expectedStatusText)).toBeInTheDocument();
    expect(screen.getByText(expectedStartActionText)).toBeInTheDocument();
    expect(screen.getByText(expectedFinishActionText)).toBeInTheDocument();
  });
});
