'use client';

import { arrow, logoBlack, logoTextWhite } from '@/assets';
import Image from 'next/image';
import { Chakra_Petch } from 'next/font/google';

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Home() {
  return (
    <main className="flex h-svh w-full flex-col bg-layout-primary p-2">
      <div className="bg-gradient flex h-[60%] w-full flex-col items-center justify-center gap-8 sm:h-2/3">
        <Image src={logoBlack} alt="02XM Logo" className="size-[150px]" />
        <h1 className="border-b-[1px] border-solid border-text-secondary px-5 pb-4 text-3xl font-semibold uppercase text-text-secondary">
          Coming soon
        </h1>
      </div>
      <div className=".border-dotted-squares relative mt-4 flex h-[40%] w-full flex-col items-center justify-center gap-4 border-t-2 border-dashed border-text-primary px-5 text-center text-sm text-text-primary sm:h-1/3 md:gap-5 lg:text-lg">
        <p>Witaj na naszej stronie!</p>
        <p className="max-w-[300px] sm:max-w-[600px] md:max-w-none">
          Aktualnie jest w budowie...{' '}
          <span className="block">
            ale już wkrótce zaprezentujemy wszystkie nasze prace i projekty.
          </span>
        </p>
        <p>Dziękujemy za cierpliwość!</p>

        <div
          className={`${chakraPetch.className} text-gradient absolute bottom-2 left-0 flex gap-2 text-base font-semibold uppercase`}
        >
          <Image src={arrow} alt="arrow" />
          <h2>Stay tuned</h2>
        </div>
      </div>
      <div className="flex h-[80px] w-full flex-col items-center justify-center bg-layout-secondary">
        <Image
          src={logoTextWhite}
          alt="02XM Logo Text"
          className="h-auto w-[130px]"
        />
      </div>
    </main>
  );
}
