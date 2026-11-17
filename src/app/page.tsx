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

          <section className="mt-12 px-4 max-w-4xl mx-auto">
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Your Time とは
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Your Timeは、生年月日と想定寿命から<strong>人生の残り時間</strong>をリアルタイムで可視化する無料Webアプリケーションです。
                時間は限られています。毎日を大切に過ごすために、あなたの時間を見える化しましょう。
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-white">
                主な機能
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">⏰</span>
                  <div>
                    <strong>リアルタイムカウントダウン</strong> - 残り時間を年・月・日・時・分・秒で表示
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">📊</span>
                  <div>
                    <strong>人生の進捗表示</strong> - 経過日数、残り日数、進捗率を統計カードで可視化
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">💭</span>
                  <div>
                    <strong>名言管理</strong> - 自分を鼓舞する名言を登録・管理し、モチベーションを維持
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✅</span>
                  <div>
                    <strong>バケットリスト</strong> - 死ぬまでにやりたいことをリスト化して管理
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">🔒</span>
                  <div>
                    <strong>完全プライベート</strong> - すべてのデータはブラウザのLocalStorageに保存され、外部送信されません
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-white">
                よくある質問（FAQ）
              </h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    データはどこに保存されますか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    すべてのデータ（生年月日、名言、バケットリストなど）はブラウザのLocalStorageに保存されます。
                    サーバーには送信されないため、プライバシーが完全に保護されます。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    ブラウザを変えたらデータは消えますか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    はい。LocalStorageはブラウザごとに独立しているため、別のブラウザやデバイスではデータは引き継がれません。
                    <a href="/settings" className="text-purple-600 dark:text-purple-400 hover:underline ml-1">設定ページ</a>から
                    データをエクスポートして、新しい環境でインポートすることで移行できます。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    計算方法は？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    生年月日に設定した平均寿命（年数）を加算した日時から、現在時刻を引いた差分を計算しています。
                    100ミリ秒ごとに更新されるため、リアルタイムで減少していく様子が確認できます。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    無料ですか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    はい、完全無料です。広告表示により運営されています。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    スマートフォンで使えますか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    はい。PWA（Progressive Web App）対応しているため、スマートフォンのホーム画面に追加してアプリのように使用できます。
                    オフラインでも動作します。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    データが消えた場合の対処法は？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    ブラウザのキャッシュクリアやプライベートブラウジングモードではデータが保存されません。
                    定期的に<a href="/settings" className="text-purple-600 dark:text-purple-400 hover:underline">設定ページ</a>から
                    バックアップをエクスポートすることをお勧めします。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    平均寿命の設定を変更できますか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    はい。入力フォームで1〜120歳の範囲でスライダーで設定できます。
                    設定後も「設定をリセット」ボタンで再度変更可能です。
                  </p>
                </details>

                <details className="group">
                  <summary className="cursor-pointer font-semibold text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    名言やバケットリストの件数制限はありますか？
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    技術的な上限はありませんが、ブラウザのLocalStorage容量（通常5〜10MB）に依存します。
                    一般的な使い方であれば問題なく使用できます。
                  </p>
                </details>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-slate-800/50 dark:to-slate-700/50 rounded-xl border border-purple-100 dark:border-slate-700">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">
                  今すぐ始めましょう
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  生年月日と想定寿命を入力するだけで、すぐに使い始められます。
                  詳しい使い方は<a href="/guide" className="text-purple-600 dark:text-purple-400 hover:underline">使い方ガイド</a>をご覧ください。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
