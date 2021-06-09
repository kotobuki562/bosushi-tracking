import type { ReactNode, VFC } from 'react';

import { Header } from './Header';
import { Sidebar } from './Sidebar';

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <main className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased bg-white">
      <Header />
      <div className="flex w-full">
        <Sidebar />
        <div className="mt-14 mb-10 ml-14 md:ml-64 h-full">
          {props.children}
        </div>
      </div>
    </main>
  );
};
