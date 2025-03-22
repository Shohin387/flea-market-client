import { createSlice, Slice } from "@reduxjs/toolkit";
import type { SubsI } from "@/interfaces/subs.interface";
import { Subs } from "@/data/subsData";


const defStateCards: SubsI[] = Subs

const subsReducer: Slice = createSlice({
		name:"CardsSlice",
		initialState: defStateCards,
		reducers: {
		}
})


export const {setCards} = subsReducer.actions
export {subsReducer}
export const {actions, reducer} = subsReducer