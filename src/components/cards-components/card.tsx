import React from "react";
import {CardsData} from "../../interfaces/cardData.interface";
import style from "../../statics/styles/card.module.css"

interface el {
    el: CardsData
}

const Card: React.FC<el> = ({el}): JSX.Element => {
    const chars = el.discription.split("")
    
    return (
        <>
            <img className={style.imgCard} src={el.imgSrc!} alt=""  />
            <div className={style.info}>
                <h3>{el.nameProdyct}</h3>
                <b>{el.discription.length <= 25 ? el.discription : chars.slice(0, 25).join("") + "..."}</b><br />
                Цена: <b>{el.price}</b>
            </div>
        </>
    )
}

export default Card