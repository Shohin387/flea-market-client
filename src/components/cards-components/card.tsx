import React, { memo, useEffect, useState } from "react";
import {CardsData} from "../../interfaces/cardData.interface";
import styleCard from "../../statics/styles/card.module.css"
import favoriteIcon from "../../assets/img/fovorites.png"
import activeFavoriteIcon from "../../assets/img/active-fovorites.png"
import { useDispatch } from "react-redux";
import { favoriteReducer } from "../../store/favoritesStore/favoritesStore.slice";
import { Link } from "react-router-dom";



interface el {
    el: CardsData
}



const Card: React.FC<el> = memo(({el}): JSX.Element => {
    const chars = el.discription.split("")
    const [favoriteIsActive, setFavoriteIsActive] = useState<Boolean>(false)
    const [icon, setIcone] = useState(favoriteIcon)
    const dispathFavorite = useDispatch()

    useEffect(() => {
        if (favoriteIsActive) {
            setIcone(activeFavoriteIcon)
        } else {
            setIcone(favoriteIcon)
        }
    }, [favoriteIsActive])


    return (
        <>
       
       <Link to={"/product/" + el.id}><div className={styleCard.conteinerImg}><img className={styleCard.imgCard} src={el.imgSrc!} alt=""  /></div></Link>
            <div className={styleCard.blockBtnFavorites}><img onClick={() => {
                dispathFavorite(favoriteReducer.actions.addFavorites({...el}));
                setFavoriteIsActive(prev => !prev)
            }} src={icon} alt="" /></div>
            <Link to={"/product/" + el.id}><div className={styleCard.info}>
                <h3 style={{margin: "0px"}}>{el.nameProdyct}</h3>
                <b>{el.discription.length <= 25 ? el.discription : chars.slice(0, 25).join("") + "..."}</b><br />
                Цена: <b>{el.price}</b>
            </div></Link>
        
        </>
    )
})

export default Card