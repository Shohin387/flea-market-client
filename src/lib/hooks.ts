import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { Store } from '../store/Store'
import { CardsData } from '../interfaces/cardData.interface'
import { userDataI } from '../interfaces/userData.interface'


type MyRootState = ReturnType<typeof Store.getState>
export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector

type TypeAllData = CardsData & userDataI

export default function useJoinData(id: number) {
    const cardsData: CardsData[] = useTypedSelector(state => state.cardsReducer)
    const userData: userDataI[] = useTypedSelector(state => state.userDataReducer)
    const productData = cardsData.filter((value: CardsData) => value.id == id)[0]
    const joinData = userData.map(value => {
                
        if (value.id === productData.userId) {
            const allData: TypeAllData = {...productData, ...value}
            return allData
        }
    })[0]
    return joinData
}