import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated ? (
    // eslint-disable-next-line react/jsx-handler-names
    <button onClick={loginWithRedirect}>Log in</button>
  ) : (
    <p>Login Now!!</p>
  );
};
