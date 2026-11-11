import InfoPageLayout from "@/components/InfoPageLayout";
import { siteConfig } from "@/config/site";

export const metadata = {
	title: "お問い合わせ - Your Time",
	description: "Your Timeへのお問い合わせ方法をご案内します。",
};

export default function ContactPage() {
	return (
		<InfoPageLayout title="お問い合わせ" subtitle="ご質問・不具合のご連絡はこちらから">
			<section>
				<h2>お問い合わせ先</h2>
				<p>
					サービスに関するご質問、不具合の報告、掲載内容に関するご連絡は、以下のメールアドレスまでお送りください。
				</p>
				<p className="info-page__contact">
					<a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
				</p>
			</section>
			<section>
				<h2>ご連絡いただく内容</h2>
				<ul>
					<li>お名前またはニックネーム</li>
					<li>お問い合わせ内容</li>
					<li>問題が発生したページや操作</li>
					<li>ご利用の端末・ブラウザ（不具合の場合）</li>
				</ul>
			</section>
			<section>
				<h2>返信について</h2>
				<p>
					内容を確認のうえ、必要に応じて返信します。すべてのお問い合わせに返信できない場合があります。
				</p>
			</section>
		</InfoPageLayout>
	);
}
