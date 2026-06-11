import { FilterProvider } from "@/app/(main)/(panelNav)/FilterProvider";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<FilterProvider>
			<>
				{children}
			</>
		</FilterProvider>
		
	);
}
