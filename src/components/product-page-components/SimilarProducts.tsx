'use client'

import { useTypedSelector } from "@/lib/hooks";
import AllCards from "../allCards";
import { CardsData } from "@/interfaces/cardData.interface";
import { useEffect, useState } from "react";
import cardStyle from '@/styles/card.module.css'


export default function SimilarProducts({category}: {category: string | undefined}) {
	const cards: CardsData[] = useTypedSelector(state => state.cardsReducer)
	const [data, setData] = useState<CardsData[]>([])
	useEffect(() => {
		const similar = cards.filter(value => value.category == category)
		setData(similar)
	}, [category])

	return (
		<footer style={{marginLeft: '15px'}}>
			<h1 style={{marginLeft: "3%", fontSize: "23px"}}>Похожие товары</h1>
			<AllCards className={cardStyle.similar} ReducerData={data}/>
		</footer>
	)
}