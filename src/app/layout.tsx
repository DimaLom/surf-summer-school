import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/shared/ui/Header';

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
      <body className="bg-gray-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
