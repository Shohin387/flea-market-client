'use client'
import ChatsBlock from "./ChatBlock";
import msgStyle from '@/styles/messanger.module.css'
import Messages from "./MessagesBlock";
import { useEffect, useState } from "react";
import { ChatI } from "@/interfaces/chat.interface";
import { useSearchParams } from "next/navigation";
import Avatar from "@/UI/Avatar";
import { ArrowLeft, EllipsisVertical } from "lucide-react";
import { useTypedSelector, useUpdateQueryParam } from "@/lib/hooks";
import Link from "next/link";

export default function ContainerMessanger() {
	const [chats, setChats] = useState<ChatI[]>([])
	const chatID = useSearchParams().get('chatID')
	const updtChatID = useUpdateQueryParam()
	const data: ChatI[] = useTypedSelector(state => state.chatReducer)
	
	useEffect(() => {
		const chatsFilt = data.filter((value) => value.creatorID === 1 || value.participantID === 1)
		setChats(chatsFilt)
	}, [])


		return(
			<main className={msgStyle.conteinerMsg}>
				<ChatsBlock data={chats} chatID={chatID}/>

				<section className={`${msgStyle.selfChat} ${chatID ? msgStyle.selfChatActiveForMobile : msgStyle.selfChatDisableForMobile}`}>
					{ chatID &&
					<>
					<div className={msgStyle.headerChat}>
						<ArrowLeft cursor={'pointer'} onClick={() => updtChatID('')} size={25}/>
						<Avatar defaultMg={false} urlAvatar={chats[+chatID! - 1]?.participant.profilePhoto} userName={chats[+chatID! - 1]?.participant.name} size={40}/>

						<h2><Link href={`user/${chats[+chatID! - 1]?.creator.id == 1 
							? chats[+chatID! - 1]?.participant.id 
							: chats[+chatID! - 1]?.creator.id}`}>
								{chats[+chatID! - 1]?.creator.id == 1 
								? chats[+chatID! - 1]?.participant.name 
								: chats[+chatID! - 1]?.creator.name }
						</Link></h2>
						<EllipsisVertical cursor={'pointer'} />
					</div>
					
					<Messages chatID={chatID}/>
					</>
					}
				</section>
				
			</main>
		)
	
}