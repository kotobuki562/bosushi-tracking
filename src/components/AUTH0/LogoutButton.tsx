import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = (props: any) => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <button
      variant="outline-primary"
      // eslint-disable-next-line react/jsx-handler-names
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
      {...props}>
      Log out
    </button>
  ) : null;
};
