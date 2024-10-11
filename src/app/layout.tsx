import Link from 'next/link';
import React from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className='container mx-auto'>
        <header className="h-100 flex flex-wrap justify-between items-center bg-gray-300 mx-100">
          <Link href="/" className='w-140 h-100'>ЛОГО</Link>
          <Link href="/poll">Опитування</Link>
        </header>
        {children}
        <footer>
          <Link href="/">ЛОГО</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/partners">Партнери</Link>
          <Link href="/contacts">Контакти</Link>
          <Link href="/poll">Опитування</Link>
        </footer>
      </body>
    </html>
  );
}
