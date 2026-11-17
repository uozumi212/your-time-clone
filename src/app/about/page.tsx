import InfoPageLayout from "@/components/InfoPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = {
	title: "運営者・Your Timeについて",
	description: "Your Timeの目的、運営方針、提供している機能について説明します。",
};

export default function AboutPage() {
	return (
		<InfoPageLayout title="運営者・アプリについて" subtitle="Your Timeが生まれた理由と、提供している価値">
			<section>
				<h2>Your Timeとは</h2>
				<p>
					Your Timeは、誕生日と想定寿命から人生の経過時間と残り時間を可視化し、
					限られた時間を意識して毎日を過ごすための無料Webアプリです。
				</p>
			</section>
			<section>
				<h2>運営者情報</h2>
				<p><strong>運営者</strong>: {siteConfig.operatorName}</p>
				<p><strong>運営開始</strong>: 2026年11月</p>
				<p><strong>連絡先</strong>: <a href="mailto:yourtime.teamcontact@gmail.com">yourtime.teamcontact@gmail.com</a></p>
				<p>
					本サービスは、日々の目標や大切にしたい言葉を記録し、行動を振り返るための個人運営アプリです。
					時間管理と自己啓発をサポートするツールとして、無料で提供しています。
				</p>
			</section>
			<section>
				<h2>運営の目的</h2>
				<p>
					現代社会では、時間の流れが速く、日々の忙しさに追われがちです。
					Your Timeは、人生の残り時間を可視化することで、今この瞬間の大切さを再認識し、
					より充実した人生を送るきっかけを提供することを目的としています。
				</p>
			</section>
			<section>
				<h2>運営方針</h2>
				<ul>
					<li>利用者のプライバシーを最優先し、すべてのデータはブラウザ内のみに保存します</li>
					<li>利用者が自分の時間について考えるきっかけとなる、わかりやすく実用的な情報と機能を提供します</li>
					<li>機能改善や内容の更新を継続し、正確で安心して使えるサービスを目指します</li>
					<li>完全無料で提供し、広告収益により運営を継続します</li>
				</ul>
			</section>
			<section>
				<h2>更新履歴</h2>
				<ul>
					<li>2026年11月: サービス開始、基本機能（タイマー、名言管理、バケットリスト）実装</li>
					<li>2026年11月: データバックアップ・復元機能、設定ページ追加</li>
				</ul>
			</section>
		</InfoPageLayout>
	);
}
