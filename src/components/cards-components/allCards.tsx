import React from "react";
import Card from "./card";
import { useTypedSelector } from "../../store/cardsStore/cardsStore";
import {CardsData} from "../../interfaces/cardData.interface";

const AllCards: React.FC = (): JSX.Element => {
    const cardsReducer: CardsData[] = useTypedSelector(state => state.cardsReducer)
    console.log(cardsReducer)
    return (
        <section>
            {cardsReducer.map(el => (
                <Card el={el}/>
            ))}
        </section>
    )
}

export default AllCards