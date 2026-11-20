import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InfoPageLayout from "@/components/InfoPageLayout";
import { BLOG_POSTS, getBlogPost } from "@/data/blogPosts";

export function generateStaticParams() {
	return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = getBlogPost(slug);
	if (!post) {
		return { title: "記事が見つかりません" };
	}
	return {
		title: post.title,
		description: post.description,
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getBlogPost(slug);

	if (!post) {
		notFound();
	}

	return (
		<InfoPageLayout title={post.title} subtitle={post.description}>
			<div className="blog-post__meta">
				<span className="blog-post__category">{post.category}</span>
				<time dateTime={post.publishedAt}>{post.publishedAt} 公開</time>
			</div>

			{post.sections.map((section) => (
				<section key={section.heading}>
					<h2>{section.heading}</h2>
					{section.body.map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}
				</section>
			))}

			<Link href="/blog" className="blog-post__back">
				← コラム一覧に戻る
			</Link>
		</InfoPageLayout>
	);
}
