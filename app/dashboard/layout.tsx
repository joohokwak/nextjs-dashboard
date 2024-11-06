import React from 'react';
import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full sm:flex-col sm:pl-0">
      <SideNav />
      <div className="p-12 sm:p-3 overflow-hidden">{children}</div>
    </div>
  );
}
