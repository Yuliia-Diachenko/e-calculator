import Link from 'next/link';
import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header>
          <Link href="/">ЛОГО</Link>
          <Link href="/poll">Опитування</Link>
        </header>
        {children}
        <footer>
          <Link href="/">ЛОГО</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/partners">Партнери</Link>
          <Link href='/contacts'>Контакти</Link>
          <Link href="/poll">Опитування</Link>
        </footer>
      </body>
    </html>
  );
}
