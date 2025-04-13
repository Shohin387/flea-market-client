import { ChatI } from "@/interfaces/chat.interface";
import vor from '@/assets/vor.jpg'


export const MessangerData: ChatI[] = [
	{
		chatID: 1,
		creatorID: 1,
		participantID: 2,
		creator: {
			id: 1,
			name: "Vor V Zakone",
			userName: '@AYE',
			profilePhoto: vor,
		},
		participant: {
			id: 2,
      name: "Aleg Mangal",
      userName: '@ChingizHan',
		},
	},
	{
		chatID: 2,
		creatorID: 1,
		participantID: 3,
		creator: {
			id: 1,
			name: "Vor V Zakone",
			userName: '@AYE',
			profilePhoto: vor,
		},
		participant: {
			id: 3,
      name: "Pyatnadtsat Ambalov",
      userName: '@Chihnya',
		},
	}
]