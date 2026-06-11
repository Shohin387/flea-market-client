'use client'

import { CardsData } from "@/interfaces/cardData.interface";
import { FiltersI } from "@/interfaces/filtersI";
import { useTypedSelector } from "@/lib/hooks";
import { filtration, searchProduct } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

interface HomeI {
	cardsReducer: CardsData[],
	filters: FiltersI,
	setFilters: Dispatch<SetStateAction<FiltersI>>
}
export const FilterCntx = createContext<HomeI | undefined>(undefined)

export const FilterProvider: FC<{children: React.ReactNode}> = ({children}) => {
	const [filters, setFilters] = useState<FiltersI>({
		state: 'любое',
		comnMethod: 'Все',
		salesmen: 'все',
		from: 0,
		to: 0
	})
	const cards: CardsData[] = useTypedSelector(state => state.cardsReducer)
	const resFiltration = filtration(cards, filters)
	

	return (
		<FilterCntx.Provider value={{cardsReducer: resFiltration, filters, setFilters}}>
			{children}
		</FilterCntx.Provider>
	)
}