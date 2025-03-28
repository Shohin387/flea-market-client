
import Chat from "./Chat";
import { ChatI } from "@/interfaces/chatData.interface";
import msgStyle from '@/styles/messanger.module.css'


export default function ChatsBlock({data}: {data: ChatI[]}) {
	

	return (
		<section className={msgStyle.sideChatBlock}>
			{
				data?.map(el => (
					<div className={msgStyle.chat} key={el.id}>
						<Chat el={el}/>
					</div>
				))
				
			}
		</section>
	)
}