/* eslint-disable tailwindcss/no-custom-classname */
// import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar } from '@chakra-ui/react';
import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const { user } = useAuth0();
  return (
    <header className="flex fixed z-10 justify-between items-center w-full h-14 text-teal-100 bg-teal-400">
      <div className="flex items-center w-14 md:w-64">
        <div className="flex items-center">
          <Avatar
            className="w-14"
            size="md"
            name={user?.nickname}
            src={user?.picture}
          />
          <p className="hidden md:block ml-2 text-xl font-semibold text-white">
            {user?.nickname}
          </p>
        </div>
      </div>
    </header>
  );
});
