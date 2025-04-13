import { truncateText } from "@/lib/utils";
import Avatar from "@/UI/Avatar";
import msgStyle from '@/styles/messanger.module.css'
import { ChatI } from "@/interfaces/chat.interface";


export default function Chat({el}: {el: Omit<ChatI, 'msgs'>}) {
	return (
		<>
			<Avatar urlAvatar={el.creatorID === 1 ? el.participant.profilePhoto : el.creator.profilePhoto} size={50} userName="Vor" style={{margin: '0px'}}/>
			<b>{truncateText(el.creator.id === 1 ? el.participant!.name : el.creator.name , 15)}</b>
			<div className={msgStyle.countNewMsgs}>2</div>
		</>	
	)
}