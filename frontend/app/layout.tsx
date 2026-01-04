// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '내 홈페이지',
  description: '프론트엔드 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
          {/* 네비게이션 메뉴 */}
        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/projects">Projects</a>
        </nav>
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}