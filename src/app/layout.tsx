import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/shared/ui/Header';
import { ReduxProvider } from '@/app/provider';

export const metadata: Metadata = {
  title: 'Weather Dashboard',
  description: 'Weather forecast application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white-100 p-[40px]">
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
