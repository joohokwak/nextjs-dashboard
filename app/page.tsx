import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana } from '@/app/ui/fonts';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
// import heroPc from '@/public/hero-desktop.png';

export default function HomePage() {
  return (
    <main className="flex flex-col p-[24px] h-[100vh] gap-4">
      {/* 상단 로고 영역 */}
      <div className="h-[208px] bg-[#0070f3] rounded-[8px] flex items-end p-4 sm:h-[80px]">
        <AcmeLogo />
      </div>

      {/* 하단 영역 */}
      <div className="flex flex-grow gap-4 sm:flex-col">
        {/* 좌측 텍스트, 로그인 버튼 */}
        <div className="flex bg-[#f9fafb] w-2/5 rounded-lg p-[80px] justify-center flex-col items-start gap-6 sm:w-full sm:px-[24px] sm:py-[40px]">
          <p className={`${lusitana.className} text-[30px] sm:text-[20px]`}>
            <strong className="text-point-color1">Welcome to Acme.</strong> This is the example for the{' '}
            <Link href="https://nextjs.org/learn" target="_blank" className="text-point-color2">
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex h-[48px] items-center gap-5 bg-point-color2 rounded-lg text-white px-3 py-6"
          >
            Log in
            <ArrowRightIcon className="w-[24px]" />
          </Link>
        </div>

        {/* 우측 이미지 영역 */}
        <div className="flex items-center justify-center w-3/5 px-28 py-12 sm:w-full">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="block sm:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
            placeholder="blur"
            blurDataURL="/hero-desktop.png"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="hidden sm:block"
            alt="Screenshot of the dashboard project showing mobile version"
            placeholder="blur"
            blurDataURL="/hero-mobile.png"
          />
          {/* 기존 이미지 방식 */}
          {/* <img src={heroPc.src} alt="" /> */}
        </div>
      </div>
    </main>
  );
}
