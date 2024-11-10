import { createSlice, Slice } from "@reduxjs/toolkit";
import { CardsData } from "../../interfaces/cardData.interface";

const defaultState: CardsData[] = []

const favoriteReducer: Slice = createSlice({
    name: "FavotiteSlice",
    initialState: defaultState,
    reducers: {
        addFavorites: (state, {payload: el}) => {
            state.push({...el})
            console.log("add")
            console.log(defaultState)
        },
        getFavorites: (state) => {
            if (state)  return state
            return console.log("no")
        }
    }
})

export {favoriteReducer}
export const {actions, reducer} = favoriteReducer