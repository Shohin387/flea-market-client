import { metaDataP } from "@/components/product-page-components/conteiner-info";
import { Metadata } from "next";


export const metadata: Metadata = {...metaDataP}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>{children}</div>
	);
}
