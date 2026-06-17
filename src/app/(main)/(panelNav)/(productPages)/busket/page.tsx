'use client'

import SideBar from "@/components/side-bar"
import { CardsData } from "@/interfaces/cardData.interface"
import { useTypedSelector } from "@/lib/hooks"
import { useContext, useEffect, useState } from "react"
import { FilterCntx } from "../../FilterProvider"
import { filtration } from "@/lib/utils"
import AllCards from "@/components/allCards"
import DialogBusket from "@/UI/dialogBusket"

export default function Busket() {
	const [userBusketIds, setUserBusketIds] = useState<Number[]>([])
	const data: CardsData[] = useTypedSelector(state => state.cardsReducer)
	const userBusket = data.filter(el => userBusketIds.includes(el.id))
	const filter = useContext(FilterCntx)
	const filterBusket = filtration(userBusket, filter!.filters)
	const sum = filterBusket.reduce((sum, product) => sum + product.price, 0)

	//DIALOG State's
	const [show, setShow] = useState(false)

	useEffect(() => {
		const ids = localStorage.getItem('ids')
		if (ids) {
			const parseIDs: Number[] = JSON.parse(ids)
			setUserBusketIds(parseIDs)
			console.log(userBusketIds)
		}
	}, [])
	return (
		<>
			<section style={{marginLeft: '30px'}}>
				{	filterBusket.length > 0
					? <><h2>Ваши товары в корзине</h2><AllCards busket ReducerData={filterBusket}/> <DialogBusket show={show} setShow={setShow} cards={userBusket}/></>
					: <><h1 style={{textAlign: 'center'}}>У вас в корзине нет товаров!</h1> </>

				}
			</section>
			<SideBar setShow={setShow} busket price={sum} filters={filter!.filters} setFilters={filter!.setFilters}/>
		</>
	)
}