import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.png';
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
        <header className="h-100 flex flex-wrap justify-between items-center bg-gray-250 mx-100">
          <Link href="/" className='pl-100'><Image src={logo} className='w-51 h-62' alt='logo'/></Link>
          <Link href="/partners">Партнери</Link>
          <Link href="/contacts">Контакти</Link>
        </header>
        {children}
        <footer className='flex '>
          <Link href="/">єКалькулятор</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/partners">Партнери</Link>
          <Link href="/contacts">Контакти</Link>
          <Link href="/poll">Опитування</Link>
        </footer>
      </body>
    </html>
  );
}
