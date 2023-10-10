import Topbar from '@/app/_components/Topbar/Topbar';
import '../styles/globals.scss';
import Cursor from '@/utils/Cursor/Cursor';
import ProgressBar from '@/app/_components/ProgressBar/ProgressBar';

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
      </body>
    </html>
  );
}
