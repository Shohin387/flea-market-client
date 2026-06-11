'use client'

import AllCards from "@/components/allCards"
import cardStyle from '@/styles/card.module.css'
import { CardsData } from "@/interfaces/cardData.interface"


export default function FoundDataPageComp({data, textPrompt}: {data: CardsData[], textPrompt: string}) {

		return (
				<>
					<h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {textPrompt}</h2>
					<AllCards className={cardStyle.mainBlockCard} ReducerData={data}/>
				</>
		)
}