import InfoPageLayout from "@/components/InfoPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = {
	title: "プライバシーポリシー - Your Time",
	description: "Your Timeの個人情報および利用データの取り扱いについて説明します。",
};

export default function PrivacyPage() {
	return (
		<InfoPageLayout title="プライバシーポリシー" subtitle="Your Timeにおける情報の取り扱いについて">
			<p className="info-page__updated">制定日：2026年11月11日</p>
			<section>
				<h2>1. 運営者</h2>
				<p>{siteConfig.operatorName}</p>
			</section>
			<section>
				<h2>2. 取得する情報</h2>
				<p>
					Your Timeは、アカウント登録を必要としません。アプリ上で入力された生年月日、想定寿命、
					名言、Bucket Listの内容は、利用者のブラウザ内のローカルストレージに保存されます。
					これらの情報を運営者のサーバーへ送信・保存することはありません。
				</p>
			</section>
			<section>
				<h2>3. 利用目的</h2>
				<p>
					ブラウザ内に保存された情報は、残り時間の計算、名言の表示、Bucket Listの表示・編集など、
					アプリの機能を提供するためにのみ利用されます。
				</p>
			</section>
			<section>
				<h2>4. 広告について</h2>
				<p>
					当サイトでは、今後Google AdSenseなどの第三者配信広告サービスを利用する場合があります。
					広告配信事業者は、利用者の興味に応じた広告を表示するため、Cookieを使用することがあります。
					広告配信を開始する場合は、本ポリシーを更新し、必要な同意取得や設定を行います。
				</p>
			</section>
			<section>
				<h2>5. アクセス解析について</h2>
				<p>
					現在、アクセス解析サービスは導入していません。将来導入する場合は、取得する情報、利用目的、
					Cookieの扱いについて本ポリシーに追記します。
				</p>
			</section>
			<section>
				<h2>6. 本ポリシーの変更</h2>
				<p>
					法令やサービス内容の変更に応じて、本ポリシーを改定することがあります。改定後のポリシーは、
					本ページに掲載した時点から適用します。
				</p>
			</section>
			<section>
				<h2>7. お問い合わせ</h2>
				<p>
					個人情報の取り扱いに関するお問い合わせは、
					<a href="/contact">お問い合わせページ</a>からご連絡ください。
				</p>
			</section>
		</InfoPageLayout>
	);
}
