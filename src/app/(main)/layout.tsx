import PanelNavigation from "@/components/panel-navigation";


export default function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<PanelNavigation>
			{children}
		</PanelNavigation>
	)
}