import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: Loading Screen', () => {
  it('should render correctly', () => {

    render(<LoadingScreen />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
