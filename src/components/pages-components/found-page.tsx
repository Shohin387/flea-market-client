'use client'

import { useSearchParams } from "next/navigation"
import AllCards from "@/components/allCards"
import { useTypedSelector } from "@/lib/hooks"
import { searchProduct } from "@/lib/utils"


export default function FoundDataPageComp() {
		const prompt = useSearchParams()
		const cards = useTypedSelector(state => state.cardsReducer)
		const data = searchProduct(cards, prompt?.get("prompt")!)
		console.log(data)

		return (
				<>
					<h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {prompt?.get("prompt")}</h2>
					<AllCards ReducerData={data}/>
				</>
		)
}