'use client'

import { useSearchParams } from "next/navigation"
import AllCards from "@/components/allCards"
import { useTypedSelector } from "@/lib/hooks"


export default function FoundDataPageComp() {
		const foundCards = useTypedSelector(state => state.foundCardsReduxer).state
		const prompt = useSearchParams()
		console.log(foundCards)
		console.log(prompt)
		return (
				<>
					<h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {prompt?.get("prompt")}</h2>
					<AllCards ReducerData={foundCards}/>
				</>
		)
}