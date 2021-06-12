/* eslint-disable react/jsx-handler-names */
/* eslint-disable tailwindcss/no-custom-classname */
// import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Avatar, Link } from '@chakra-ui/react';
import { Menu } from '@headlessui/react';
import { LoginIcon, LogoutIcon } from '@heroicons/react/outline';
import { memo, useCallback } from 'react';

import { MenuItem } from '../components/Menu/Menu';

export const Header = memo(() => {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLoagoutClick = useCallback(() => {
    return logout({ returnTo: window.location.origin });
  }, [logout]);

  const handleLoginClick = useCallback(() => {
    return loginWithRedirect();
  }, [loginWithRedirect]);

  const isLoginMenus = [
    {
      name: 'LOGOUT',
      onClick: handleLoagoutClick,
      icon: <LogoutIcon className="w-5 h-5" />,
    },
  ];

  const isLogoutMenus = [
    {
      name: 'LOGIN',
      onClick: handleLoginClick,
      icon: <LoginIcon className="w-5 h-5" />,
    },
  ];

  return (
    <header className="flex fixed z-10 justify-between items-center w-full h-14 text-teal-200 bg-teal-800">
      <div className="flex items-center w-14 md:w-64">
        <Link to="/">
          <img className="w-14 h-14" src="/img/logo.png" alt="logo" />
        </Link>

        <p className="hidden md:block ml-2 text-lg font-semibold">
          Bosushi Tracking
        </p>
      </div>
      <div className="flex items-center">
        <p className="hidden md:block mr-2 text-xl font-semibold">
          {user?.nickname}
        </p>
        <div className="h-14">
          {isAuthenticated ? (
            <MenuItem
              menuBtn={
                <Menu.Button className="focus:outline-none">
                  <Avatar
                    className="w-14"
                    size="md"
                    name={user?.nickname}
                    src={user?.picture}
                  />
                </Menu.Button>
              }
              menuItems={
                <>
                  {isLoginMenus.map((menu) => {
                    return (
                      <Menu.Item key={menu.name}>
                        <button
                          onClick={menu.onClick}
                          className="group flex items-center py-2 px-2 my-1 w-full text-sm rounded-md focus:outline-none text-teal-600 hover:bg-teal-200 ">
                          {menu.icon}
                          {menu.name}
                        </button>
                      </Menu.Item>
                    );
                  })}
                </>
              }
            />
          ) : (
            <MenuItem
              menuBtn={
                <Menu.Button className="focus:outline-none">
                  <Avatar
                    className="w-14"
                    size="md"
                    name={user?.nickname}
                    src={user?.picture}
                  />
                </Menu.Button>
              }
              menuItems={
                <>
                  {isLogoutMenus.map((menu) => {
                    return (
                      <Menu.Item key={menu.name}>
                        <button
                          onClick={menu.onClick}
                          className="group flex items-center py-2 px-2 my-1 w-full text-sm rounded-md focus:outline-none text-teal-600 hover:bg-teal-200 ">
                          {menu.icon}
                          {menu.name}
                        </button>
                      </Menu.Item>
                    );
                  })}
                </>
              }
            />
          )}
        </div>
      </div>
    </header>
  );
});
