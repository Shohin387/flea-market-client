import { FC, useEffect, useState } from "react";
import styleProduct from "../../statics/styles/product-page-style.module.css"
import PhotoAndInfo from "./photo-and-info";
import BlockForPay from "./block-for-pay";
import useJoinData from "../../lib/hooks";
import { CardsData } from "../../interfaces/cardData.interface";
import { useParams } from "react-router";
import {FulllScreanImg} from "./FullScreanImg";
import { userDataI } from "../../interfaces/userData.interface";


type TypeAllData = CardsData & userDataI

const ConteinerInfo: FC = (): JSX.Element => {

    const {productId}: any = useParams()
    const [isFullScrean, setIsFullScrean] = useState(false)
    const [data, setData] = useState<TypeAllData>()
    const joinData = useJoinData(productId)
    useEffect(() => {
        setData(joinData)
    }, [])

    return (
        <section className={styleProduct.conteinerInfo}>
            <PhotoAndInfo setIsFullScrean={setIsFullScrean} data={data!}/>
            <BlockForPay data={data!}/>
            <FulllScreanImg setIsFullScrean={setIsFullScrean} isFullScrean={isFullScrean} img={`${data?.imgSrc}`}/>
        </section>
    )
}

export type {TypeAllData}
export default ConteinerInfo