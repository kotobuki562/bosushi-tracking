/* eslint-disable react/display-name */
/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode, VFC } from 'react';
import { memo } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = memo((props) => {
  return (
    <main className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased bg-white">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <div className="mt-14 ml-14 md:ml-64 w-full h-full text-gray-800">
          {props.children}
        </div>
      </div>
    </main>
  );
});
