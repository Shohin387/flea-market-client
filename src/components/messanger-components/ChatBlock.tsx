
import Input from "@/UI/MyInput";
import Chat from "./Chat";
import msgStyle from '@/styles/messanger.module.css'
import { ChatI } from "@/interfaces/chat.interface";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { useUpdateQueryParam } from "@/lib/hooks";



export default function ChatsBlock({data, chatID}: {data: ChatI[], chatID: string | null}) {
	const updtChatID = useUpdateQueryParam()
	const [inputValue, setInputValue] = useState('')
	
	
	

	return (
		<section className={`${msgStyle.sideChatBlock} ${chatID && msgStyle.disabledSideChatBlock}`}>
			<div className={msgStyle.SearchInChats}>
				<Input value={inputValue}  setValue={setInputValue} classNameInp={msgStyle.SearchInput} placeholderInput="Serch" typeInp="text" animation={false}/>
				<Search cursor={'pointer'}/>
			</div>

			
			<div>
				{
					data.map(el => (
						<div onClick={() => updtChatID(el.chatID.toString())} style={{backgroundColor: el.chatID == +chatID! ? 'rgb(21, 21, 21)' : ''}} key={el.chatID} className={msgStyle.chat}>
							<Chat el={el}/>
						</div>
					))
				}
			</div>
			
		</section>
	)
}