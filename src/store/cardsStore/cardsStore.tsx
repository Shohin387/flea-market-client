import { combineReducers } from 'redux'
import { reducer as Cards } from './cardsStore.slice'
import { reducer as FavoriteReducer } from '../favoritesStore/favoritesStore.slice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const reducers = combineReducers({
    cardsReducer: Cards,
    FavoriteReducer
  })
  
 export const Store = configureStore({
    reducer: reducers
  })

  type MyRootState = ReturnType<typeof Store.getState>
  export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector