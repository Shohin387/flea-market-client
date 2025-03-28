import { ChatI } from "@/interfaces/chatData.interface";
import { salesmanData } from "./userData";

export const ChatData: ChatI[] = [
	{
		id: 1,
		idSender: 2,
		idRecipient: 1,
		get nameOfInterlocutor() {
			return salesmanData[this.idSender - 1].name
		}
		
	}
]