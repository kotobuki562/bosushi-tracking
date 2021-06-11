/* eslint-disable tailwindcss/no-custom-classname */
// import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@chakra-ui/react';
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const { user } = useAuth0();
  return (
    <header className="flex fixed z-10 justify-between items-center w-full h-14 text-white bg-teal-400">
      <div className="flex items-center w-14 md:w-64">
        <img className="w-14 h-14" src="/img/logo192.png" alt="logo" />
        <p className="hidden md:block ml-2 text-lg font-semibold">
          Bosushi Tracking
        </p>
      </div>
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
