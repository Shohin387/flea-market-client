import { createSlice, Slice } from "@reduxjs/toolkit";
import {CardsData} from "@/interfaces/cardData.interface";
import { cards } from "@/data/cardsData";


const defStateCards: CardsData[] = cards

const cardsReducer: Slice = createSlice({
    name:"CardsSlice",
    initialState: defStateCards,
    reducers: {
        
    }
})

export {cardsReducer}
export const {actions, reducer} = cardsReducer