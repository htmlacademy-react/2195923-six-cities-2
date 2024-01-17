import { useState } from 'react';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchOffersAction, loginAction } from '../../store/actions/api-actions';
import { AuthData } from '../../types/auth-data';

function Auth() {
  const PASSWORD_PATTERN = /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/;
  const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<string>();
  const [email, setEmail] = useState<string>();

  const sendRequestsToServer = async (authorizationData: AuthData) => {
    await dispatch(loginAction(authorizationData));
    await dispatch(fetchOffersAction());
  };

  const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (email && password) {
      const authorizationData: AuthData = {
        email: email,
        password: password
      };
      sendRequestsToServer(authorizationData);
    }
  };

  function isValidData() {
    if (email && password && password.match(PASSWORD_PATTERN) && email.match(EMAIL_PATTERN)) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form className="login__form form" action="#" method="post" onSubmit={onFormSubmit}>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={(evt) => setEmail(evt.target.value)} data-testid="emailElement"/>
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={(evt) => setPassword(evt.target.value)} data-testid="passwordElement"/>
        </div>
        <button className="login__submit form__submit button" type="submit" disabled={isValidData()}>Sign in</button>
      </form>
    </section>
  );
}

export default Auth;
