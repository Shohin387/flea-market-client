'use client'

import { colors } from "@/constants/colorConstants"
import randomColor from "@/lib/utils"
import Image, { StaticImageData } from "next/image"
import profileStyle from '@/styles/profile.module.css'
import { CSSProperties, useEffect, useState } from "react"



export default function Avatar({urlAvatar, userName, size=100, radius=0, style, defaultMg=true}: {urlAvatar: string | undefined | StaticImageData, userName: string | undefined, size?: number, radius?: number, style?: CSSProperties, defaultMg?: boolean}) {

	const [color, setColor] = useState('')
	useEffect(() => {
		setColor(randomColor(colors))
	}, [])

	return (
		<>
			{
				urlAvatar
					
				? <div style={{ 
						width: `${size}px`, 
						height:`${size}px`, 
						overflow: 'hidden', 
						borderRadius: `${radius}%`,
						marginBlockStart: defaultMg ? '20px': '', marginLeft:defaultMg ? '20px' : '', ...style

					}} className={`${profileStyle.centerItem}`}>
						<Image alt="Фото профиля" style={{ width: `120%`, height: '100%'}} src={urlAvatar!} />
						<div ></div>
					</div>
				: <div style={{backgroundColor: color, width: `${size}px`, height:`${size}px`, marginBlockStart: defaultMg ? '20px': '', marginLeft:defaultMg ? '20px' : '', ...style}} className={profileStyle.noPhoto}>
					<h1 style={{fontSize: `${size / 2}px`}}>{userName?.split('')[0]}</h1>
				</div>
			}
		</>
	)
}