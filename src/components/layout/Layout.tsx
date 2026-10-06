import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex h-screen bg-blockchain-navy overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar scroll-smooth">
          <div className="container mx-auto px-4 py-8 max-w-7xl">
            <import-outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
