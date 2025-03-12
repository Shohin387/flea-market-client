import {FC} from "react";
import AllCards from "../components/allCards";
import { useTypedSelector } from "../lib/hooks";
import {CardsData} from "../interfaces/cardData.interface";


const HomePage: FC = (): JSX.Element => {
    const cardsReducer: CardsData[] = useTypedSelector(state => state.cardsReducer)

    return(
        <>
        <h1 style={{marginLeft: 30 + "px"}}>Home</h1>
        <AllCards ReducerData={cardsReducer}/>
        </>
    )
}

export default HomePage