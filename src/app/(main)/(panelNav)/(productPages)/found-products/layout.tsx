import { Suspense } from "react";


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<Suspense fallback={<div>Загрузка</div>}>
				{children}
			</Suspense>
			
		</main>
	);
}
