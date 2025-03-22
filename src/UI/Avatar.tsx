'use client'

import { colors } from "@/constants/colorConstants"
import randomColor from "@/lib/utils"
import Image from "next/image"
import profileStyle from '@/styles/profile.module.css'
import { useEffect, useState } from "react"


export default function Avatar({urlAvatar, userName, size=100}: {urlAvatar: string | undefined, userName: string | undefined, size?: number}) {

	const [color, setColor] = useState('')
	useEffect(() => {
		setColor(randomColor(colors))
	}, [])

	return (
		<>
			{
				urlAvatar
				? <img alt="Фото профиля" src={urlAvatar!} />
				: <div style={{backgroundColor: color, width: `${size}px`, height:`${size}px` }} className={profileStyle.noPhoto}>
					<h1 style={{fontSize: `${size / 2}px`}}>{userName?.split('')[0]}</h1>
				</div>
			}
		</>
	)
}