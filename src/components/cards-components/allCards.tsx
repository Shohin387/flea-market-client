import React from "react";
import Card from "./card";
import { useTypedSelector } from "../../store/cardsStore/cardsStore";
import {CardsData} from "../../interfaces/cardData.interface";
import style from "../../statics/styles/card.module.css"

const AllCards: React.FC = (): JSX.Element => {
    const cardsReducer: CardsData[] = useTypedSelector(state => state.cardsReducer)
    console.log(cardsReducer)
    return (
        <section className={style.mainBlockCard}>
            {cardsReducer.map(el => (
                <div className={style.card} key={el.id}>
                    <Card el={el}/>
                </div>
            ))}
        </section>
    )
}

export default AllCards