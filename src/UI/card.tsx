
import {CardsData} from "../interfaces/cardData.interface";
import styleCard from "@/styles/card.module.css"
import Link from "next/link";
import { truncateText } from "../lib/utils";
import Image from 'next/image'



const Card: React.FC<{el: CardsData}> = ({el}) => {
    console.log(el)
    return (
        <>
       
            <Link target={'_blank'} href={"/product/" + el.id}>
                <div className={styleCard.conteinerImg}>
                    <img alt="Фото товара" className={styleCard.imgCard} src={el.imgSrc!} />
                </div>
                <div className={styleCard.info}>
                    <h3 style={{margin: "0px"}}>{el.nameProduct}</h3>
                    <b>{truncateText(el.discription, 20)}</b><br />
                    <div className={styleCard.priceBlock}>Цена: <b>{el.price}</b></div>
                </div>
            </Link>
        
        </>
    )
}

export default Card