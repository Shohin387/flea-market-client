'use client'
import { useEffect, useState } from "react";
import { useTypedSelector } from "@/lib/hooks";
import { ChatData } from "@/data/chatsData";
import { userDataI } from "@/interfaces/userData.interface";
import ChatsBlock from "./ChatBlock";
import { ChatI } from "@/interfaces/chatData.interface";
import msgStyle from '@/styles/messanger.module.css'
import Messages from "./MessagesBlock";
import { Message } from "@/data/messageData";


export default function ContainerMessanger() {
	const [data, setData] = useState<ChatI[]>([])
	const userData: userDataI[] = useTypedSelector(state => state.userDataReducer)
	
		useEffect(() => {
			const filtedChats = ChatData.filter(value => value.idRecipient == userData[0].id)
			setData(filtedChats)

		}, [])


		return(
			<main className={msgStyle.conteinerMsg}>
				<ChatsBlock data={data}/>
			</main>
		)
	
}