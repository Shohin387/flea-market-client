import { Slice, createSlice } from "@reduxjs/toolkit";
import { userDataI } from "../../interfaces/userData.interface";
import { salesmanData } from "../datas/userData";


const initialState: userDataI[] = salesmanData

const userDataReducer: Slice = createSlice({
    name: "userData",
    initialState,
    reducers: {

    }
})


export const {actions, reducer} = userDataReducer