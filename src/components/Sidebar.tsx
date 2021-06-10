/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  ArchiveIcon,
  HomeIcon,
  UserCircleIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const links = [
  { href: '/', pathName: 'DASHBOARD', icon: <HomeIcon className="w-7 h-7" /> },
  {
    href: '/profile',
    pathName: 'PROFILE',
    icon: <UserCircleIcon className="w-7 h-7" />,
  },
  {
    href: '/item',
    pathName: 'ITEM',
    icon: <ArchiveIcon className="w-7 h-7" />,
  },
];

export const Sidebar = () => {
  return (
    <nav className="group flex fixed top-14 left-0 flex-col items-center w-14 hover:w-64 md:w-64 h-full text-white duration-300 bg-teal-500">
      <div className="w-full">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              className="flex items-center py-3 pl-3 w-full text-white hover:border-l-4 border-red-100 duration-200 hover:bg-teal-400"
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
};
