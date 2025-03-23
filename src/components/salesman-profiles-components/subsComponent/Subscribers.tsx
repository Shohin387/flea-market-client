'use client'

import { userDataI } from "@/interfaces/userData.interface";
import Avatar from "@/UI/Avatar";
import { PlusSquare } from "lucide-react";
import { truncateText } from "@/lib/utils";
import profileStyle from '@/styles/profile.module.css'


export default function Subscribers({el}: {el: userDataI}) {
	return (
		<>
			<Avatar radius={50} size={60} urlAvatar={el.profilePhoto} userName={el.name}/>
			<div >
				<h3 className={profileStyle.textLink}>{truncateText(el.name, 18)}</h3>
				<p style={{marginTop: '0px'}}  className={profileStyle.textLink}>{el.userName}</p>
			</div>
			<PlusSquare cursor={"pointer"} size={30} color="var(--purple-color-elem)"/>
			
		</>
	)
}