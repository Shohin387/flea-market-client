import { combineReducers } from 'redux'
import { reducer as Cards } from './cardsStore.slice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const reducers = combineReducers({
    cardsReducer: Cards
  })
  
 export const cardStore = configureStore({
    reducer: reducers
  })

  type MyRootState = ReturnType<typeof cardStore.getState>
  export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector