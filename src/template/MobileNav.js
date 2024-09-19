'use client';

import { logoDarkMode } from '@/assets';
import { navigation } from '@/config/navigation';
import { routes } from '@/utils/routes';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const variants = {
  closed: {
    height: '4rem',
    // backgroundColor: 'bg-red-300',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 20,
    },
  },
  open: {
    height: '100vh',
    // backgroundColor: 'red',
    transition: {
      height: { duration: 0.3 },
      backgroundColor: { delay: 0.5, duration: 0.5 },
    },
  },
};

const navBody = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      opacity: { delay: 0.5, duration: 0.3 },
    },
  },
};

export const MobileNav = ({ ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={`fixed flex h-16 w-full flex-col items-center justify-center bg-layout-secondary text-text-primary ${
        isOpen ? variants.isOpenNav : variants.isClosedNav
      }`}
      {...rest}
    >
      <Link
        className="text-gradient absolute left-5 top-5 text-lg"
        href={routes.HOME}
      >
        #02xM
      </Link>

      <Link
        className="absolute left-1/2 top-3 -translate-x-1/2"
        href={routes.HOME}
      >
        <Image src={logoDarkMode} alt="02xM logo" height={42} width={42} />
      </Link>

      <div className="absolute right-[10px] top-2">
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={28} />
      </div>

      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={navBody}
        className={`${isOpen ? 'flex' : 'hidden'} mt-[72px] h-full w-full flex-col items-start justify-start gap-4`}
      >
        <div className="bg-gradient h-16 w-full text-text-primary">02xM</div>
        <ul className="w-full flex-col items-center justify-center gap-14 uppercase">
          {navigation.map((item) => (
            <li key={item.name} className="text-text-primary">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};
