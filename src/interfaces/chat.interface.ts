import { StaticImageData } from "next/image"

export interface ChatI {
	chatID: number,
	creatorID: number,
	participantID: number,
	creator: {
			id: number,
			name: string,
			profilePhoto?: string | StaticImageData,
			userName: string
	},
	participant: {
		id: number,
		name: string,
		profilePhoto?: string | StaticImageData,
		userName: string
}
}