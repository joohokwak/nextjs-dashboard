import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="h-screen px-2 py-4 flex flex-col w-64 sm:w-full sm:h-auto sm:static">
      <Link className="h-[160px] bg-point-color2 rounded-md flex items-end p-4 sm:h-20" href="/">
        <AcmeLogo />
      </Link>

      <div className="flex flex-col gap-2 mt-2 grow sm:flex-row">
        <NavLinks />
        <div className="bg-[#f9fafb] grow sm:hidden"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button
            type="submit"
            className="bg-[#f9fafb] w-full rounded-md flex items-center gap-2 h-12 px-3 text-sm hover:bg-[#e0f2fe] hover:text-blue-500 font-medium"
          >
            <PowerIcon className="w-6" />
            <span className="sm:hidden">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
