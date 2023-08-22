import Topbar from '@/components/Topbar/Topbar';
import '../styles/globals.scss';
import Cursor from '@/utils/Cursor/Cursor';

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
