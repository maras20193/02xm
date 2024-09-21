import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal'],
});

export const metadata = {
  title: '02xM - Strony Internetowe, Branding, Platformy Szkoleniowe',
  description:
    'Tworzymy nowoczesne, w pełni kodowane strony internetowe, platformy szkoleniowe i sklepy online. Nasze projekty są zoptymalizowane, szybkie i zgodne z najnowszymi trendami. Specjalizujemy się także w kreowaniu unikalnych identyfikacji wizualnych i brandingu.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
