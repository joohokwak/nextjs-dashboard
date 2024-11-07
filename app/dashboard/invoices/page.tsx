import { lusitana } from '@/app/ui/fonts';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import Pagination from '@/app/ui/invoices/pagination';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: number }>;
}) {
  const { query = '', page = 1 } = (await searchParams) || {};
  const currentPage = Number(page);
  // const param = await searchParams;
  // const query = param?.query || '';
  // const currentPage = Number(param?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <div>
      <h2 className={`${lusitana.className} text-2xl`}>Invoices</h2>
      <div className="flex gap-2 mt-8 sm:mt-2">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
