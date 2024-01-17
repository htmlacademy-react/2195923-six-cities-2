import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-components';
import Auth from './auth';

describe('Component: LoginPage', () => {
  it('should render correctly', () => {
    const loginButtonText = 'Sign in';
    const loginTitleText = 'Sign in';

    const { withStoreComponent } = withStore(<Auth />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(loginButtonText, {selector: 'h1'})).toBeInTheDocument();
    expect(screen.getByText(loginTitleText, {selector: 'button'})).toBeInTheDocument();
  });

  it('should render correctly when user enter email and password', async () => {
    const emailElementTestId = 'emailElement';
    const passwordElementTestId = 'passwordElement';
    const expectedEmailValue = 'test@test.ru';
    const expectedPasswordValue = '123456a';

    const { withStoreComponent } = withStore(<Auth />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    await userEvent.type(
      screen.getByTestId(emailElementTestId),
      expectedEmailValue,
    );

    await userEvent.type(
      screen.getByTestId(passwordElementTestId),
      expectedPasswordValue,
    );

    expect(screen.getByDisplayValue(expectedEmailValue)).toBeInTheDocument();
    expect(screen.getByDisplayValue(expectedPasswordValue)).toBeInTheDocument();
  });
});
