import React, { memo } from "react";
import {CardsData} from "../interfaces/cardData.interface";
import styleCard from "../statics/styles/card.module.css"
import { Link } from "react-router";
import { truncateText } from "../lib/utils";




const Card: React.FC<{el: CardsData}> = memo(({el}): JSX.Element => {
    console.log(el)
    return (
        <>
       
            <Link to={"/product/" + el.id}><div className={styleCard.conteinerImg}><img className={styleCard.imgCard} src={el.imgSrc!} alt=""  /></div>
                <div className={styleCard.info}>
                    <h3 style={{margin: "0px"}}>{el.nameProduct}</h3>
                    <b>{truncateText(el.discription, 20)}</b><br />
                    <div className={styleCard.priceBlock}>Цена: <b>{el.price}</b></div>
                </div>
            </Link>
        
        </>
    )
})

export default Card