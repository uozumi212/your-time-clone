import Link from 'next/link';
import Navigation from '@/components/Navigation';
import HomeContent from '@/components/HomeContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホーム',
  description: '生年月日と平均寿命から人生の残り時間をリアルタイムで可視化。あなたの大切な時間を意識して、毎日を充実させましょう。',
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="main-container">
        <div className="content-wrapper">
          <header className="header">
            <h1 className="title">
              <span className="title-gradient">Your Time</span>
            </h1>
            <p className="subtitle">あなたの残り時間を可視化する</p>
          </header>

          <HomeContent />

          <Link href="/features" className="home-about-link">
            <div>
              <p className="home-about-link__title">Your Time とは</p>
              <p className="home-about-link__text">主な機能やよくある質問（FAQ）はこちら</p>
            </div>
            <span className="home-about-link__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </>
  );
}
