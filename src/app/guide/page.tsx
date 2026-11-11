import InfoPageLayout from "@/components/InfoPageLayout";

export const metadata = {
	title: "Your Timeの使い方・機能",
	description: "Your Timeの各機能と基本的な使い方を説明します。",
};

export default function GuidePage() {
	return (
		<InfoPageLayout title="使い方・機能説明" subtitle="Your Timeを活用して、時間の使い方を見直しましょう">
			<section>
				<h2>1. 残り時間を設定する</h2>
				<p>
					ホーム画面で生年月日と想定寿命を入力します。設定すると、経過日数、残り日数、
					人生の進捗率、残り時間が表示されます。
				</p>
			</section>
			<section>
				<h2>2. 時間の変化を確認する</h2>
				<p>
					残り時間は現在時刻に合わせて更新されます。進捗率や残り日数を定期的に確認することで、
					予定や目標の見直しに役立てられます。
				</p>
			</section>
			<section>
				<h2>3. 名言を登録する</h2>
				<p>
					名言一覧から、自分を励ます言葉や大切にしたい文章を登録できます。著者や出典も入力でき、
					お気に入りの言葉をホーム画面に表示できます。
				</p>
			</section>
			<section>
				<h2>4. Bucket Listを使う</h2>
				<p>
					Bucket Listには、いつか実現したいことや行ってみたい場所を登録できます。達成した項目には
					チェックを付け、今後の行動を具体化できます。
				</p>
			</section>
			<section>
				<h2>データの保存について</h2>
				<p>
					入力した設定、名言、Bucket Listは現在利用しているブラウザのローカルストレージに保存されます。
					アカウント登録やサーバーへのデータ送信は行っていません。
				</p>
			</section>
		</InfoPageLayout>
	);
}
