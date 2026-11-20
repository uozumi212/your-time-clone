import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { getSortedBlogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
	title: "ブログ - 時間の使い方・人生について考えるコラム",
	description:
		"残り時間の可視化、名言、バケットリストなど、Your Timeのテーマにまつわる考え方やヒントをまとめたコラムです。",
};

export default function BlogIndexPage() {
	const posts = getSortedBlogPosts();

	return (
		<>
			<Navigation />
			<main className="features-page">
				<div className="features-page__inner">
					<header className="features-hero">
						<p className="features-hero__eyebrow">BLOG</p>
						<h1 className="features-hero__title">コラム</h1>
						<p className="features-hero__lead">
							残り時間の可視化、名言、バケットリストなど、
							<strong>限られた時間をどう使うか</strong>
							について考えるためのコラムをまとめています。
						</p>
					</header>

					<section className="features-section" aria-labelledby="blog-list-heading">
						<h2 id="blog-list-heading" className="features-section__title">
							記事一覧
						</h2>
						<ul className="blog-grid">
							{posts.map((post) => (
								<li key={post.slug}>
									<Link href={`/blog/${post.slug}`} className="blog-card">
										<span className="blog-card__category">{post.category}</span>
										<h3 className="blog-card__title">{post.title}</h3>
										<p className="blog-card__excerpt">{post.description}</p>
										<time className="blog-card__date" dateTime={post.publishedAt}>
											{post.publishedAt}
										</time>
									</Link>
								</li>
							))}
						</ul>
					</section>
				</div>
			</main>
		</>
	);
}
