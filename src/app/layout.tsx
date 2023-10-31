import Topbar from '@/components/Topbar/Topbar';
import '../styles/globals.scss';
import Cursor from '@/utils/Cursor/Cursor';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import Footer from './_components/Section/Footer/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {/* <Cursor /> */}
        <ProgressBar />
        <Topbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
