import { FC, useEffect, useState } from "react";
import styleProduct from "../../statics/styles/product-page-style.module.css"
import PhotoAndInfo from "./photo-and-info";
import BlockForPay from "./block-for-pay";
import { useTypedSelector } from "../../store/cardsStore/cardsStore";
import { CardsData } from "../../interfaces/cardData.interface";
import { useParams } from "react-router-dom";

const ConteinerInfo: FC = (): JSX.Element => {
    const selectDate: CardsData[] = useTypedSelector((state) => state.cardsReducer)
    const {productId}: any = useParams()
    const [data, setData] = useState<CardsData>()

    useEffect(() => {
        const fnSelect = () => {
            for (let i = 0; i < selectDate.length; i++) {
                if (selectDate[i].id == productId) {
                    setData(selectDate[i])
                }
                
            }
        }
        fnSelect()
        
    }, [])
    return (
        <section className={styleProduct.conteinerInfo}>
            <PhotoAndInfo data={data!}/>
            <BlockForPay data={data!}/>
        </section>
    )
}

export default ConteinerInfo