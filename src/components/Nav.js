import { logoDarkMode } from '@/assets';
import { navigation } from '@/config/navigation';
import { routes } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';

export const Nav = ({ ...rest }) => (
  <nav
    className="container-xl hidden h-12 w-full flex-row items-center bg-layout-secondary text-text-primary"
    {...rest}
  >
    <Link className="gap- flex items-center justify-center" href={routes.HOME}>
      <Image src={logoDarkMode} alt="02xM logo" />
      02xM
    </Link>
    <ul className="flex w-full flex-row items-center justify-center gap-14 uppercase">
      {navigation.map((item) => (
        <Link href={item.href} key={item.name}>
          {item.name}
        </Link>
      ))}
    </ul>
  </nav>
);
