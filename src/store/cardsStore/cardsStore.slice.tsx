import { createSlice, Slice } from "@reduxjs/toolkit";
import {CardsData} from "@/interfaces/cardData.interface";
import { cards } from "../datas/cardsData";


const defStateCards: CardsData[] = cards

const cardsReducer: Slice = createSlice({
    name:"CardsSlice",
    initialState: defStateCards,
    reducers: {
        setCards(state, action): CardsData[] | undefined {
            if (action.payload) {
                return state = action.payload
            }
        }
    }
})


export const {setCards} = cardsReducer.actions
export {cardsReducer}
export const {actions, reducer} = cardsReducer