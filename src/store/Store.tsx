import { combineReducers } from 'redux'
import { reducer as Cards } from './cardsStore/cardsStore.slice'
import {reducer as userData} from './userDataStore/userDataStore.slice'
import { configureStore } from '@reduxjs/toolkit'
import { reducer as subsReducer } from './subsStore/subs.slice'

const reducers = combineReducers({
  cardsReducer: Cards,
  userDataReducer: userData,
  subsReducer
})
  
export const Store = configureStore({
  reducer: reducers,
})

