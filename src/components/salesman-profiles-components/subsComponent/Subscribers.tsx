'use client'

import { userDataI } from "@/interfaces/userData.interface";
import Avatar from "@/UI/Avatar";
import { PlusSquare } from "lucide-react";
import { truncateText } from "@/lib/utils";
import profileStyle from '@/styles/profile.module.css'
import Link from 'next/link'

export default function Subscribers({el}: {el: userDataI}) {
	return (
		<>
			<Avatar radius={50} size={60} urlAvatar={el.profilePhoto} userName={el.name}/>
			<div >
				<Link className={profileStyle.textLink} href={'user/' + el.id}>
					<h3 className={profileStyle.textLink}>{truncateText(el.name, 18)}</h3>
					<p style={{marginTop: '0px'}}  className={profileStyle.textLink}>{el.userName}</p>
				</Link>
			</div>
			<PlusSquare cursor={"pointer"} size={30} color="var(--purple-color-elem)"/>
			
		</>
	)
}