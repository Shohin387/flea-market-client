import { ChatI } from "@/interfaces/chatData.interface";
import { truncateText } from "@/lib/utils";
import Avatar from "@/UI/Avatar";



export default function Chat({el}: {el: ChatI}) {
	return (
		<>
			<Avatar urlAvatar={el.photoOfInterlocutor} size={50} userName="Vor" style={{margin: '0px'}}/>
			<h1 style={{fontSize:'20px'}}>{truncateText(el.nameOfInterlocutor, 15)}</h1>
		</>
	)
}