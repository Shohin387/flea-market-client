'use client'

import {FC, use} from "react";
import AllCards from "@/components/allCards";
import cardStyle from '@/styles/card.module.css'
import { CardsData } from "@/interfaces/cardData.interface";
import { useTypedSelector } from "@/lib/hooks";



// const getData = (async () => {
// 	const {data} = await axios.get('http://localhost:3001/products/all-products')
// 	return data
// })()


const HomePage: FC = () => {
	
	const cardsReducer: CardsData[] = useTypedSelector(state => state.cardsReducer)
	console.log(cardsReducer)
	return(
			<>
				<h2 style={{marginLeft: "30px"}}>Товары</h2>
				<AllCards className={cardStyle.mainBlockCard} ReducerData={cardsReducer}/>
			</>
 	)
}

export default HomePage