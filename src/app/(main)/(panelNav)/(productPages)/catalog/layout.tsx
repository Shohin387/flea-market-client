import { Suspense } from "react";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Suspense fallback={<h1>Загрузка...</h1>}>
				{children}
			</Suspense>
			
		</main>
	);
}
