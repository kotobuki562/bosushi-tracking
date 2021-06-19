/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/display-name */
import { Menu, Transition } from '@headlessui/react';
import type { ReactNode, VFC } from 'react';
import { Fragment, memo } from 'react';

type Props = {
  menuBtn: ReactNode;
  menuItems: ReactNode;
};

export const MenuItem: VFC<Props> = memo((props) => {
  return (
    <div className="w-full text-right">
      <Menu as="div" className="inline-block relative text-left">
        <div>{props.menuBtn}</div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 w-56 bg-teal-100 rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none">
            <div className="py-1 px-1 ">{props.menuItems}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
});
