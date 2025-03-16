import Fuse from "fuse.js"
import { CardsData } from "../interfaces/cardData.interface"


export function truncateText(text: string, maxLength: number) {
    if (text.length <= 25 ) return text
    
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

