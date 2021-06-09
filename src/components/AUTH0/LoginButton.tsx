import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '../Button/Button';

export const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated ? (
    <Button
      type="other"
      btnText="LOGIN"
      // eslint-disable-next-line react/jsx-handler-names
      onClick={loginWithRedirect}
      size="md"
    />
  ) : (
    <p>Login Now!!</p>
  );
};
