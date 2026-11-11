import type { ReactNode } from "react";
import Navigation from "@/components/Navigation";

interface InfoPageLayoutProps {
	title: string;
	subtitle: string;
	children: ReactNode;
}

export default function InfoPageLayout({ title, subtitle, children }: InfoPageLayoutProps) {
	return (
		<>
			<Navigation />
			<main className="info-page">
				<div className="info-page__inner">
					<header className="info-page__header">
						<h1>{title}</h1>
						<p>{subtitle}</p>
					</header>
					<div className="info-page__content">{children}</div>
				</div>
			</main>
		</>
	);
}
