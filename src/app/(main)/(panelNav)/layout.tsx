import PanelNavigation from "@/components/panel-navigation";
import './global.css'

export default function MainLayout({children}: {children: React.ReactNode}) {
	return (
		<PanelNavigation>
			<div>
				{children}
			</div>
		</PanelNavigation>
	)
}