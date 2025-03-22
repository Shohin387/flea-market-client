'use client'

import { FC, useEffect, useState } from "react";
import styleProduct from "../../styles/product-page-style.module.css"
import PhotoAndInfo from "./photo-and-info";
import BlockForPay from "./block-for-pay";
import useJoinData from "../../lib/hooks";
import { CardsData } from "../../interfaces/cardData.interface";
import { useParams } from "next/navigation";
import {FulllScreanImg} from "./FullScreanImg";
import { userDataI } from "../../interfaces/userData.interface";
import SimilarProducts from "./SimilarProducts";




type TypeAllData = CardsData & {name: string, userId: number}


const ConteinerInfo: FC = () => {
    const {productId} = useParams<{productId: string}>()
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
            <SimilarProducts category={data?.category}/>
            <FulllScreanImg setIsFullScrean={setIsFullScrean} isFullScrean={isFullScrean} img={`${data?.imgSrc}`}/>
        </section>
    )
}

export type {TypeAllData}
export default ConteinerInfo
