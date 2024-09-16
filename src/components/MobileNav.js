'use client';

import { logoDarkMode } from '@/assets';
import { navigation } from '@/config/navigation';
import { routes } from '@/utils/routes';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const MobileNav = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`container-xl fixed flex ${
        isOpen ? 'h-[100vh]' : 'h-16'
      } w-full flex-col items-center justify-center bg-layout-secondary text-text-primary transition-all duration-300`}
      {...rest}
    >
      <Link
        className="absolute left-5 top-5 text-base text-accent-primary"
        href={routes.HOME}
      >
        #02xM
      </Link>
      <Link className="" href={routes.HOME}>
        <Image src={logoDarkMode} alt="02xM logo" height={42} />
      </Link>
      <div className="absolute right-5">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
      </div>

      <ul className="hidden w-full flex-row items-center justify-center gap-14 uppercase">
        {navigation.map((item) => (
          <Link href={item.href} key={item.name}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
