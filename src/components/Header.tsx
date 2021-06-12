/* eslint-disable tailwindcss/no-custom-classname */
// import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Link } from '@chakra-ui/react';
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline';
import { memo, useCallback } from 'react';

import { Button } from './Button/Button';

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLoagoutClick = useCallback(() => {
    return logout({ returnTo: window.location.origin });
  }, [logout]);

  const handleLoginClick = useCallback(() => {
    return loginWithRedirect();
  }, [loginWithRedirect]);
  return (
    <header className="flex fixed z-10 justify-between items-center w-full h-14 text-white bg-teal-200">
      <div className="flex items-center w-14 md:w-64">
        <Link to="/">
          <img className="w-14 h-14" src="/img/logo.png" alt="logo" />
        </Link>

        <p className="hidden md:block ml-2 text-lg font-semibold">
          Bosushi Tracking
        </p>
      </div>
      {isAuthenticated ? (
        <div>
          <Button
            useage="delete"
            btnText="LOGOUT"
            onClick={handleLoagoutClick}
            size="md"
            rightIcon={<LogoutIcon className="w-5 h-5" />}
          />
        </div>
      ) : (
        <div>
          <Button
            useage="other"
            btnText="LOGIN"
            onClick={handleLoginClick}
            size="md"
            rightIcon={<LoginIcon className="w-5 h-5" />}
          />
        </div>
      )}
      <div className="flex items-center">
        <p className="hidden md:block mr-2 text-xl font-semibold text-white">
          {user?.nickname}
        </p>
        <Avatar
          className="w-14"
          size="md"
          name={user?.nickname}
          src={user?.picture}
        />
      </div>
    </header>
  );
});
