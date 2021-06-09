import { useAuth0 } from '@auth0/auth0-react';

import { Button } from '../Button/Button';

export const LogoutButton = (props: any) => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <Button
      type="delete"
      btnText="LOGOUT"
      // eslint-disable-next-line react/jsx-handler-names
      onClick={() => {
        return logout({ returnTo: window.location.origin });
      }}
      size="md"
      {...props}
    />
  ) : null;
};
