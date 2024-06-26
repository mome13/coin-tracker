import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import SearchForm from './ui/search-form';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${lexend.className} flex min-h-screen flex-col items-center p-24 gap-y-8`}>
        <div className='w-full max-w-md rounded-2xl overflow-hidden shadow-md bg-white p-12'>
          <SearchForm />
        </div>
        {children}
      </body>
    </html>
  );
}
