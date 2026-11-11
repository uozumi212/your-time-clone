import Link from "next/link";

export default function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner">
				<p className="site-footer__copy">
					© {new Date().getFullYear()} Your Time
				</p>
				<nav className="site-footer__links" aria-label="フッターナビゲーション">
					<Link href="/about">運営者・アプリについて</Link>
					<Link href="/guide">使い方・機能</Link>
					<Link href="/originality">独自コンテンツ</Link>
					<Link href="/contact">お問い合わせ</Link>
					<Link href="/privacy">プライバシーポリシー</Link>
				</nav>
			</div>
		</footer>
	);
}
