import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
	title: "よくある質問（FAQ） - Your Time",
	description:
		"Your Timeの使い方、時間の計算方法、データの保存・バックアップ、名言やバケットリスト機能について、よくある質問をまとめています。",
};

type Faq = { question: string; answer: ReactNode };
type FaqCategory = { title: string; faqs: Faq[] };

const FAQ_CATEGORIES: FaqCategory[] = [
	{
		title: "基本的な使い方について",
		faqs: [
			{
				question: "Your Timeとはどんなアプリですか？",
				answer: (
					<>
						生年月日と想定寿命から、人生の経過時間と残り時間をリアルタイムに可視化する無料のWebアプリです。
						名言管理やバケットリスト機能と組み合わせて、限られた時間をどう使うかを考えるきっかけを提供しています。
						詳しくは
						<Link href="/features">「Your Timeとは」ページ</Link>
						もご覧ください。
					</>
				),
			},
			{
				question: "利用に登録やログインは必要ですか？",
				answer: (
					<>
						必要ありません。生年月日と想定寿命を入力するだけで、すぐに使い始められます。
						メールアドレスの登録やアカウント作成は不要です。
					</>
				),
			},
			{
				question: "すべての機能を無料で使えますか？",
				answer: (
					<>
						はい、すべての機能を無料で利用できます。本サービスは広告収益によって運営されています。
					</>
				),
			},
		],
	},
	{
		title: "時間の計算について",
		faqs: [
			{
				question: "残り時間はどのように計算されていますか？",
				answer: (
					<>
						入力された生年月日に、設定した想定寿命（年数）を加算した日時から、現在時刻を引いた差分を計算しています。
						表示は一定間隔で更新され、リアルタイムに減少していく様子を確認できます。
					</>
				),
			},
			{
				question: "想定寿命の数値はどこから来ていますか？根拠はありますか？",
				answer: (
					<>
						想定寿命は、厚生労働省が公表している簡易生命表などで示される平均寿命を参考にしつつ、
						利用者自身が1〜120歳の範囲で自由に設定できる項目です。平均寿命はその年に生まれた人を対象とした統計上の推計値であり、
						個人の寿命を予測するものではありません。詳しくは
						<Link href="/blog/how-to-use-average-life-expectancy-data">こちらのコラム</Link>
						で解説しています。
					</>
				),
			},
			{
				question: "想定寿命は後から変更できますか？",
				answer: (
					<>
						はい。設定ページからいつでも変更できます。健康診断の結果や家族歴などを踏まえて、
						自分が納得できる数字に調整することをおすすめします。
					</>
				),
			},
			{
				question: "進捗率（%）はどういう意味ですか？",
				answer: (
					<>
						生まれてから現在までの経過日数を、想定寿命の日数で割った割合です。
						あくまで人生について考えるための目安であり、将来を保証・予測するものではありません。
					</>
				),
			},
		],
	},
	{
		title: "データ・プライバシーについて",
		faqs: [
			{
				question: "入力したデータはどこに保存されますか？",
				answer: (
					<>
						生年月日、名言、バケットリストなどのデータは、すべて利用しているブラウザのLocalStorageに保存されます。
						外部のサーバーには送信されないため、プライバシーが保護された状態で利用できます。
					</>
				),
			},
			{
				question: "複数のデバイスやブラウザでデータを同期できますか？",
				answer: (
					<>
						自動的な同期はできません。LocalStorageはブラウザ・デバイスごとに独立しているためです。
						<Link href="/settings">設定ページ</Link>
						からデータをエクスポートし、別の環境でインポートすることで手動で移行できます。
					</>
				),
			},
			{
				question: "ブラウザのキャッシュを消すとデータはどうなりますか？",
				answer: (
					<>
						データが削除される可能性があります。キャッシュのクリアやプライベートブラウジングモードでの利用時は、
						データが保存されない、または消去される場合があるため、定期的なバックアップをおすすめします。
					</>
				),
			},
			{
				question: "バックアップ・復元はどうやって行いますか？",
				answer: (
					<>
						<Link href="/settings">設定ページ</Link>
						の「データのバックアップ」からすべてのデータをJSONファイルとしてダウンロードできます。
						復元する場合は、同じページから以前エクスポートしたファイルを読み込んでください。現在のデータは上書きされます。
					</>
				),
			},
			{
				question: "運営者が利用者のデータを見ることはありますか？",
				answer: (
					<>
						ありません。データはブラウザ内のみに保存され、サーバーに送信される仕組みを持たないため、
						運営者がデータを閲覧・収集することはできません。
					</>
				),
			},
		],
	},
	{
		title: "名言・バケットリスト機能について",
		faqs: [
			{
				question: "登録できる名言はどこから来ていますか？",
				answer: (
					<>
						あらかじめ用意された名言ライブラリから検索できるほか、利用者自身が好きな名言を作者名や出典とともに
						自由に登録できます。ライブラリに見つからない場合はAIによる生成で補完する仕組みも備えています。
					</>
				),
			},
			{
				question: "名言を自分で追加・編集できますか？",
				answer: (
					<>
						はい。<Link href="/quotes/register">名言登録ページ</Link>
						から自由に追加でき、不要になった名言は削除できます。お気に入りに設定した名言はホーム画面に表示されます。
					</>
				),
			},
			{
				question: "バケットリストの項目数に上限はありますか？",
				answer: (
					<>
						技術的な上限は設けていませんが、ブラウザのLocalStorage容量（通常5〜10MB程度）に依存します。
						一般的な使い方であれば十分な件数を登録できます。
					</>
				),
			},
			{
				question: "バケットリストの項目を達成したらどうなりますか？",
				answer: (
					<>
						項目にチェックを付けることで達成済みとして記録できます。削除はせず記録として残せるため、
						これまで実現してきたことを振り返ることができます。
					</>
				),
			},
		],
	},
	{
		title: "アプリの技術・対応環境について",
		faqs: [
			{
				question: "スマートフォンでも使えますか？",
				answer: (
					<>
						はい。PWA（Progressive Web App）に対応しているため、スマートフォンのホーム画面に追加すると、
						アプリのような見た目・操作感で利用できます。
					</>
				),
			},
			{
				question: "オフラインでも使えますか？",
				answer: (
					<>
						一度アクセスしていれば、オフライン環境でも基本的な機能を利用できます。
						サービスワーカーによってページやアセットがキャッシュされるためです。
					</>
				),
			},
			{
				question: "ダークモードには対応していますか？",
				answer: (
					<>
						対応しています。OS・ブラウザのシステム設定に合わせて自動的にライト／ダークモードが切り替わります。
						手動で切り替えることも可能です。
					</>
				),
			},
			{
				question: "なぜ広告が表示されるのですか？",
				answer: (
					<>
						本サービスは無料で提供しており、サーバーやドメインの維持、機能改善のための運営費を広告収益によって
						まかなっています。利用者のデータを広告のために外部へ送信することはありません。
					</>
				),
			},
		],
	},
];

export default function FaqPage() {
	return (
		<>
			<Navigation />
			<main className="features-page">
				<div className="features-page__inner">
					<header className="features-hero">
						<p className="features-hero__eyebrow">FAQ</p>
						<h1 className="features-hero__title">よくある質問</h1>
						<p className="features-hero__lead">
							Your Timeの使い方、時間の計算方法、データの取り扱いについて、
							<strong>よくいただく質問</strong>
							をカテゴリ別にまとめました。
						</p>
					</header>

					{FAQ_CATEGORIES.map((category) => (
						<section
							key={category.title}
							className="features-section"
							aria-labelledby={`faq-${category.title}`}
						>
							<h2 id={`faq-${category.title}`} className="features-section__title">
								{category.title}
							</h2>
							<div className="faq-list">
								{category.faqs.map((faq) => (
									<details key={faq.question} className="faq-item">
										<summary className="faq-item__question">
											<span className="faq-item__q" aria-hidden="true">
												Q
											</span>
											<span className="faq-item__label">{faq.question}</span>
											<span className="faq-item__chevron" aria-hidden="true" />
										</summary>
										<p className="faq-item__answer">{faq.answer}</p>
									</details>
								))}
							</div>
						</section>
					))}

					<section className="features-cta">
						<h2 className="features-cta__title">解決しない質問がありましたか？</h2>
						<p className="features-cta__text">
							こちらでカバーできていない内容は、お問い合わせからご連絡ください。
						</p>
						<div className="features-cta__actions">
							<Link href="/contact" className="features-cta__button features-cta__button--primary">
								お問い合わせする
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
