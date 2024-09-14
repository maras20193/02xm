import { routes } from '@/utils/routes';
import Link from 'next/link';

export default function Branding() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center gap-4 bg-layout-primary">
      <div className="text-4xl text-text-primary">BRANDING</div>
      <Link
        className="rounded-lg bg-accent-primary px-4 py-2 uppercase text-text-primary transition-colors duration-300 ease-in-out hover:bg-accent-secondary"
        href={routes.HOME}
      >
        Back
      </Link>
    </main>
  );
}
