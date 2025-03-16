'use client'

import {FC} from "react";
import AllCards from "@/components/allCards";
import { useTypedSelector } from "@/lib/hooks";
import {CardsData} from "@/interfaces/cardData.interface";



const HomePage: FC = () => {
		const cardsReducer: CardsData[] = useTypedSelector(state => state.cardsReducer)

		return(
				<>
					<h2 style={{marginLeft: "30px"}}>Товары</h2>
					<AllCards ReducerData={cardsReducer}/>
				</>
		)
}

export default HomePage