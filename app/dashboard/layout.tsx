import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen sm:flex-col">
      <SideNav />
      <div className="p-12 grow border sm:p-3">{children}</div>
    </div>
  );
}
