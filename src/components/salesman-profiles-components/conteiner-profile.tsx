'use clint'

import { userDataI } from '@/interfaces/userData.interface'
import { useTypedSelector } from '@/lib/hooks'
import profileStyle from '@/styles/profile.module.css'
import React from 'react'
import { useEffect, useState } from 'react'
import HeaderProfile from './headerProfile'
import ConteinerProduct from './products/conteiner'


export const ContextUserData = React.createContext<userDataI | undefined>(undefined)

export default function ConteinerProfile({id}: {id: string}) {
	const userData: userDataI[] = useTypedSelector(state => state.userDataReducer)
    const [filtData, setFiltData] = useState<userDataI>()
    
    useEffect(() => {
        const filtredUserData = userData.filter(el => el.id == +id)[0]
        setFiltData(filtredUserData)
    })

	return (
		<main className={profileStyle.conteinerProfile}>
			<ContextUserData.Provider value={filtData}>
				<HeaderProfile id={id}/>
			</ContextUserData.Provider>

			<ConteinerProduct />
		</main>
	)
}