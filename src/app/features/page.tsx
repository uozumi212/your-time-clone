import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
	title: "Your Timeとは・機能・よくある質問",
	description:
		"Your Timeの概要、主な機能、よくある質問（FAQ）をまとめています。人生の残り時間を可視化する無料Webアプリです。",
};

// 主な機能の一覧
const FEATURES = [
	{
		icon: "⏰",
		title: "リアルタイムカウントダウン",
		description: "残り時間を年・月・日・時・分・秒で表示します。",
	},
	{
		icon: "📊",
		title: "人生の進捗表示",
		description: "経過日数、残り日数、進捗率を統計カードで可視化します。",
	},
	{
		icon: "💭",
		title: "名言管理",
		description: "自分を鼓舞する名言を登録・管理し、モチベーションを維持できます。",
	},
	{
		icon: "✅",
		title: "バケットリスト",
		description: "死ぬまでにやりたいことをリスト化して管理できます。",
	},
	{
		icon: "🔒",
		title: "完全プライベート",
		description: "すべてのデータはブラウザのLocalStorageに保存され、外部送信されません。",
	},
] as const;

// よくある質問
const FAQS: { question: string; answer: ReactNode }[] = [
	{
		question: "データはどこに保存されますか？",
		answer: (
			<>
				すべてのデータ（生年月日、名言、バケットリストなど）はブラウザのLocalStorageに保存されます。
				サーバーには送信されないため、プライバシーが完全に保護されます。
			</>
		),
	},
	{
		question: "ブラウザを変えたらデータは消えますか？",
		answer: (
			<>
				はい。LocalStorageはブラウザごとに独立しているため、別のブラウザやデバイスではデータは引き継がれません。
				<Link href="/settings">設定ページ</Link>
				からデータをエクスポートして、新しい環境でインポートすることで移行できます。
			</>
		),
	},
	{
		question: "計算方法は？",
		answer: (
			<>
				生年月日に設定した平均寿命（年数）を加算した日時から、現在時刻を引いた差分を計算しています。
				100ミリ秒ごとに更新されるため、リアルタイムで減少していく様子が確認できます。
			</>
		),
	},
	{
		question: "無料ですか？",
		answer: <>はい、完全無料です。広告表示により運営されています。</>,
	},
	{
		question: "スマートフォンで使えますか？",
		answer: (
			<>
				はい。PWA（Progressive Web App）対応しているため、スマートフォンのホーム画面に追加してアプリのように使用できます。
				オフラインでも動作します。
			</>
		),
	},
	{
		question: "データが消えた場合の対処法は？",
		answer: (
			<>
				ブラウザのキャッシュクリアやプライベートブラウジングモードではデータが保存されません。
				定期的に<Link href="/settings">設定ページ</Link>
				からバックアップをエクスポートすることをお勧めします。
			</>
		),
	},
	{
		question: "平均寿命の設定を変更できますか？",
		answer: (
			<>
				はい。入力フォームで1〜120歳の範囲でスライダーで設定できます。
				設定後も「設定をリセット」ボタンで再度変更可能です。
			</>
		),
	},
	{
		question: "名言やバケットリストの件数制限はありますか？",
		answer: (
			<>
				技術的な上限はありませんが、ブラウザのLocalStorage容量（通常5〜10MB）に依存します。
				一般的な使い方であれば問題なく使用できます。
			</>
		),
	},
];

export default function FeaturesPage() {
	return (
		<>
			<Navigation />
			<main className="features-page">
				<div className="features-page__inner">
					<header className="features-hero">
						<p className="features-hero__eyebrow">ABOUT YOUR TIME</p>
						<h1 className="features-hero__title">Your Time とは</h1>
						<p className="features-hero__lead">
							Your Timeは、生年月日と想定寿命から<strong>人生の残り時間</strong>
							をリアルタイムで可視化する無料Webアプリケーションです。
							<br className="features-hero__br" />
							時間は限られています。毎日を大切に過ごすために、あなたの時間を見える化しましょう。
						</p>
					</header>

					<section className="features-section" aria-labelledby="features-heading">
						<h2 id="features-heading" className="features-section__title">
							主な機能
						</h2>
						<ul className="features-grid">
							{FEATURES.map((feature) => (
								<li key={feature.title} className="features-card">
									<span className="features-card__icon" aria-hidden="true">
										{feature.icon}
									</span>
									<h3 className="features-card__title">{feature.title}</h3>
									<p className="features-card__text">{feature.description}</p>
								</li>
							))}
						</ul>
					</section>

					<section className="features-section" aria-labelledby="faq-heading">
						<h2 id="faq-heading" className="features-section__title">
							よくある質問（FAQ）
						</h2>
						<div className="faq-list">
							{FAQS.map((faq) => (
								<details key={faq.question} className="faq-item">
									<summary className="faq-item__question">
										<span className="faq-item__q" aria-hidden="true">Q</span>
										<span className="faq-item__label">{faq.question}</span>
										<span className="faq-item__chevron" aria-hidden="true" />
									</summary>
									<p className="faq-item__answer">{faq.answer}</p>
								</details>
							))}
						</div>
					</section>

					<section className="features-cta">
						<h2 className="features-cta__title">今すぐ始めましょう</h2>
						<p className="features-cta__text">
							生年月日と想定寿命を入力するだけで、すぐに使い始められます。
						</p>
						<div className="features-cta__actions">
							<Link href="/" className="features-cta__button features-cta__button--primary">
								ホームで始める
							</Link>
							<Link href="/guide" className="features-cta__button">
								使い方ガイドを見る
							</Link>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
