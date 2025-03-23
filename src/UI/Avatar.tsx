'use client'

import { colors } from "@/constants/colorConstants"
import randomColor from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import profileStyle from '@/styles/profile.module.css'
import { useEffect, useState } from "react"



export default function Avatar({urlAvatar, userName, size=100, radius=0}: {urlAvatar: string | undefined | StaticImageData, userName: string | undefined, size?: number, radius?: number}) {

	const [color, setColor] = useState('')
	useEffect(() => {
		setColor(randomColor(colors))
	}, [])

	return (
		<>
			{
				urlAvatar
					
				? <div style={{ 
						width: `${size}%`, 
						height:`${size}%`, 
						overflow: 'hidden', 
						borderRadius: `${radius}%`,

					}} className={profileStyle.centerItem}>
						<Image alt="Фото профиля" style={{borderRadius: `${radius}%`, width: `130%`, height: '100%', overflow: 'hidden'}} src={urlAvatar!} />
					</div>
				: <div style={{backgroundColor: color, width: `${size}px`, height:`${size}px` }} className={profileStyle.noPhoto}>
					<h1 style={{fontSize: `${size / 2}px`}}>{userName?.split('')[0]}</h1>
				</div>
			}
		</>
	)
}