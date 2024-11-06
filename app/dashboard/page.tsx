import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';

export default async function DashboardPage() {
  return (
    <main>
      <h2 className={`${lusitana.className} text-[24px] mb-4`}>Dashboard</h2>
      <div className="grid gap-6 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        <CardWrapper />
      </div>
    </main>
  );
}
