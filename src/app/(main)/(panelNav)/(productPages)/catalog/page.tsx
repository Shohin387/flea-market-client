'use client'

import AllCards from "@/components/allCards"
import SideBar from "@/components/side-bar"
import { CardsData } from "@/interfaces/cardData.interface"
import { useTypedSelector } from "@/lib/hooks"
import { useSearchParams } from "next/navigation"
import { Suspense, useContext } from "react"
import { FilterCntx } from "../../FilterProvider"
import { filtration } from "@/lib/utils"

export default function Catalog() {
	const prompt = useSearchParams()
	const data: CardsData[] = useTypedSelector(state => state.cardsReducer)
	const category = data.filter(el => el.category == prompt.get('prompt'))
	const filter = useContext(FilterCntx)
	const filtrationData = filtration(category, filter!.filters)
	return (
		<>
			<section>
				<h1>Категория - {prompt.get('prompt')}</h1>
				<AllCards ReducerData={filtrationData}/>
			</section>
			<SideBar filters={filter!.filters} setFilters={filter!.setFilters}/>
		</>
	)
}