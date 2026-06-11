import { MessangerData } from "@/data/messangerData";
import { ChatI } from "@/interfaces/chat.interface";
import { createSlice, Slice } from "@reduxjs/toolkit";


const chatsReducer: Slice = createSlice({
	name: 'msgsSlice',
	initialState: MessangerData,
	reducers: {
		createChats(state: ChatI[], {payload}: {payload: ChatI}) {
			state.push(payload)
		}
	}
})

export const {actions, reducer} = chatsReducer