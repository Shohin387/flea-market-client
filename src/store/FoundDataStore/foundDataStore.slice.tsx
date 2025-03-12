import { createSlice, Slice } from "@reduxjs/toolkit";

const initialState = {
    state: [],
}

export const FoundDataReducer: Slice = createSlice({
    name: "FoundDataReducer",
    initialState,
    reducers: {
        setStateFoundData: (state, action) => {
            state.state = [...action.payload]
        }
    }

})

export const {actions, reducer} = FoundDataReducer
export const {setStateFoundData} = FoundDataReducer.actions