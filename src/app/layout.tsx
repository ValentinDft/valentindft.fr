import Topbar from '@/components/Topbar/Topbar';
import '../styles/globals.scss';
import type { Metadata } from 'next';
import Cursor from '@/components/Cursor/Cursor';

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
        {/* <Cursor /> */}
        <Topbar />
        {children}
      </body>
    </html>
  );
}
