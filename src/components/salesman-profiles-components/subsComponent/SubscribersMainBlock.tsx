'use client'

import { SubsI } from "@/interfaces/subs.interface";
import { userDataI } from "@/interfaces/userData.interface";
import { useTypedSelector } from "@/lib/hooks";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Subscribers from "./Subscribers";
import profileStyle from "@/styles/profile.module.css"


export default function SubscribersConteiner({cumirID, setCount, className=profileStyle.mainBlockSupscribers}: {cumirID: number, setCount: Dispatch<SetStateAction<number>>, className?: string}) {
	const subs: SubsI[] = useTypedSelector(state => state.subsReducer)
	const userData: userDataI[] = useTypedSelector(state => state.userDataReducer)
	const [subscribersData, setsubscribersData] = useState<userDataI[]>()



	useEffect(() => {
		const subscribers = subs.filter(value =>  value.cumirID == cumirID)
		const subscribersDataFilt = subscribers.map(value => userData.filter(userValue => value.subscriberID == userValue.id)[0])
		setsubscribersData(subscribersDataFilt)
		setCount(subscribersDataFilt.length)
	}, [])


	return (
		<>
			{ subscribersData?.length
				? <section className={className}>
				{
					subscribersData?.map(el => (
						<div className={profileStyle.blockSupscribers} key={el.id}>
							<Subscribers el={el}/>
						</div>
					))
				}
			</section>

			: <b>Нету подписчиков</b>
			}
		</>
	)
}