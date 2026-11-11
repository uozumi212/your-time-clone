import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata = {
	title: "Your Timeの独自コンテンツ",
	description: "Your Timeが提供する独自の考え方とコンテンツについて説明します。",
};

export default function OriginalityPage() {
	return (
		<InfoPageLayout title="独自コンテンツについて" subtitle="時間を可視化するだけで終わらせないために">
			<section>
				<h2>残り時間を「行動」につなげる設計</h2>
				<p>
					Your Timeは、残り時間の表示だけでなく、名言の記録とBucket Listを組み合わせています。
					数字で現状を知り、言葉で価値観を思い出し、やりたいことを具体的な項目にするという流れを、
					ひとつの画面構成にまとめています。
				</p>
			</section>
			<section>
				<h2>このアプリの計算方法</h2>
				<p>
					入力された生年月日を起点に、現在までの経過時間と、設定した想定寿命までの時間を計算します。
					進捗率は、経過日数を想定寿命の日数で割って算出しています。表示は人生について考えるための
					目安であり、将来を予測するものではありません。
				</p>
			</section>
			<section>
				<h2>利用者自身が作るコンテンツ</h2>
				<p>
					登録する名言や目標は利用者自身が選び、編集するパーソナルコンテンツです。テンプレートを
					消費するだけでなく、自分の価値観や目標を記録して継続的に見直せる点を大切にしています。
				</p>
			</section>
		</InfoPageLayout>
	);
}
