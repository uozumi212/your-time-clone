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
				<h2>運営者</h2>
				<p>{siteConfig.operatorName}</p>
				<p>
					本サービスは、日々の目標や大切にしたい言葉を記録し、行動を振り返るための個人運営アプリです。
				</p>
			</section>
			<section>
				<h2>運営方針</h2>
				<p>
					利用者が自分の時間について考えるきっかけとなる、わかりやすく実用的な情報と機能を提供します。
					機能改善や内容の更新を継続し、正確で安心して使えるサービスを目指します。
				</p>
			</section>
		</InfoPageLayout>
	);
}
