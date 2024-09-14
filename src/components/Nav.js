import { navigation } from '@/config/navigation';
import { routes } from '@/utils/routes';
import Link from 'next/link';

export const Nav = () => (
  <nav className="flex h-12 w-full flex-row items-center bg-layout-secondary text-text-primary">
    <Link className="" href={routes.HOME}>
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
