/* eslint-disable react/display-name */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ArchiveIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import { memo } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { href: '/', pathName: 'DASHBOARD', icon: <HomeIcon className="w-7 h-7" /> },
  {
    href: '/profile',
    pathName: 'PROFILE',
    icon: <UserCircleIcon className="w-7 h-7" />,
  },
  {
    href: '/items',
    pathName: 'ITEM',
    icon: <ArchiveIcon className="w-7 h-7" />,
  },
];

export const Sidebar = memo(() => {
  return (
    <nav className="group flex fixed top-14 left-0 flex-col items-center w-14 hover:w-64 md:w-64 h-full text-white bg-teal-800 duration-300">
      <div className="mt-4 w-full">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              className="flex items-center py-3 pl-3 w-full text-white hover:bg-teal-700 hover:border-l-4 border-red-100 duration-200"
              to={link.href}>
              {link.icon}
              <p className="hidden group-hover:block md:block ml-2 font-semibold">
                {link.pathName}
              </p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});
