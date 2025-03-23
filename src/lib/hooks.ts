import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Store } from '../store/Store'
import { CardsData } from '../interfaces/cardData.interface'
import { userDataI } from '../interfaces/userData.interface'
import {StaticImageData} from 'next/image'


type MyRootState = ReturnType<typeof Store.getState>
export const useTypedSelector: TypedUseSelectorHook<MyRootState> = useSelector
export const useTypedDispatch = useDispatch<typeof Store.dispatch>


type TypeAllData = CardsData & {name: string, userId: number, profilePhoto?: string | StaticImageData}
export default function useJoinData(id: number | string) {
    const cardsData: CardsData[] = useTypedSelector(state => state.cardsReducer)
    const userData: userDataI[] = useTypedSelector(state => state.userDataReducer)
    const productData = cardsData.filter((value: CardsData) => value.id == id)[0]
    let allData: TypeAllData[] = [];
    userData.forEach(value => {
        if (value.id == productData.userId) {
            console.log('similar')
            allData = [{...productData, name: value.name, userId: value.id, profilePhoto: value.profilePhoto}]
            console.log(allData)
            
        }
    })
    return allData[0]
}
