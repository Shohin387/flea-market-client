import Fuse from "fuse.js"
import { CardsData } from "../interfaces/cardData.interface"
import { FiltersI } from "@/interfaces/filtersI"


export function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength ) return text
    
    return text.split("").slice(0, maxLength - 3).join("") + "..."
}


export function searchProduct(items: CardsData[], searchElem: string) {
    const fuse = new Fuse(items, {
        includeScore: true,
        keys: ["discription", "nameProduct"],
        threshold: 0.4,
    })
    console.log(searchElem)
    const resultSerching = fuse.search(searchElem.toLocaleUpperCase())
    const resultProcess = resultSerching.map(value => value.item)

    return resultProcess
}



export default function randomColor(arr: string[]): string {
    const randomIndex = Math.floor(Math.random() * arr.length)

    return arr[randomIndex]
}

export const filtration = (cards: CardsData[], filters: FiltersI) => {
	const cardsReducer = cards.filter(el => {
		if (filters.state == 'любое') return el
		else return el.state == filters.state 
	}).filter(el => {
		if (filters.salesmen == 'все') return el
		else return el.salesmen == filters.salesmen
	}).filter(el => {
		if (filters.comnMethod == 'Все') return el
		else return el.comnMethod == filters.comnMethod
	}).filter(el => {
		if (filters.from == 0 && filters.to == 0) return el
		else return filters.from <= el.price  && el.price <= filters.to
	})
	return cardsReducer
}