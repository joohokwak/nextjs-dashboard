'use client';
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map((link, idx) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'bg-[#f9fafb] rounded-md flex items-center gap-2 h-12 px-3 text-sm hover:bg-[#e0f2fe] hover:text-blue-500 font-medium sm:w-full sm:justify-center',
              { 'bg-sky-100 text-blue-600': pathName === link.href }
              // { 'bg-sky-100 text-blue-600': idx === useIdx }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="sm:hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
