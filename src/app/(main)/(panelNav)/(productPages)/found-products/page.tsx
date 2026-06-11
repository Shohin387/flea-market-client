'use client'


import { FilterCntx } from "@/app/(main)/(panelNav)/FilterProvider"
import FoundDataPageComp from "@/components/pages-components/found-page"
import SideBar from "@/components/side-bar"
import { useTypedSelector } from "@/lib/hooks"
import { filtration, searchProduct } from "@/lib/utils"
import { useSearchParams } from "next/navigation"
import { useContext } from "react"


export default function FoundDataPage() {
  const prompt = useSearchParams()
	const cards = useTypedSelector(state => state.cardsReducer)
	const foundCards = searchProduct(cards, prompt?.get("prompt")!)
  const dataFilter = useContext(FilterCntx)
	const resFiltration = filtration(foundCards, dataFilter!.filters)


    return (
        <>
            <section>
                <FoundDataPageComp data={resFiltration} textPrompt={`${prompt.get('prompt')}`}/>
            </section>
            <SideBar filters={dataFilter?.filters} setFilters={dataFilter!.setFilters}/>
        </>
    )
}