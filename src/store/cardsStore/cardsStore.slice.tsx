import { createSlice, Slice } from "@reduxjs/toolkit";
import {CardsData} from "@/interfaces/cardData.interface";
import {cards} from "../datas/cardsData"

const defStateCards: CardsData[] = cards

const cardsReducer: Slice = createSlice({
    name:"CardsSlice",
    initialState: defStateCards,
    reducers: {
        getCards(): CardsData[] | undefined {
            if (cards) return cards
            return 
        }
    }
})



export {cardsReducer}
export const {actions, reducer} = cardsReducer