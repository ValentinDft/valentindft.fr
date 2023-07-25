import Topbar from '@/components/Topbar/Topbar';
import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Valentin Duffet',
  description: 'Welcome to my new portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
