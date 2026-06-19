'use client'

import { FC, useEffect, useState } from "react";
import styleProduct from "../../styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info";
import { PlusSquare } from "lucide-react";
import clsx from "clsx";
import Link from 'next/link'
import Avatar from "@/UI/Avatar";
import DialogBusket from "@/UI/dialogBusket";
import { CardsData } from "@/interfaces/cardData.interface";


const BlockForPay: FC<{data: TypeAllData}> = ({data}) => {
    const cards: CardsData[] = [
        {
            id: data?.id,
            adress: data?.adress,
            coordinate: data?.coordinate,
            category: data?.category,
            comnMethod: data?.comnMethod,
            discription: data?.discription,
            imgSrc: data?.imgSrc,
            nameProduct: data?.nameProduct,
            price: data?.price,
            salesmen: data?.salesmen,
            sold:data?.sold,
            state: data?.state,
            userId: data?.userId
        }
    ]
    console.log(cards)

    const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)
    const [inBusket, setInBusket] = useState(false)
    const [show, setShow] = useState(false)

    const addToBusket = () => {
        const busketData = localStorage.getItem('ids')
        
        if (busketData) {
            const parseData: number[] = JSON.parse(busketData)
            if (!parseData.includes(data.id)) {
                parseData.push(data.id)
                setInBusket(true)
            } 
            localStorage.setItem('ids', JSON.stringify(parseData))
        } else {
            localStorage.setItem('ids', JSON.stringify([data.id]))
        }
    }


    useEffect(() => {
        const busketData = localStorage.getItem('ids')

        if (busketData) {
            const parseData: number[] = JSON.parse(busketData)
            if (!parseData.includes(data?.id)) {
                setInBusket(false)
            } else {
                setInBusket(true)
            }
        }
    }, [data?.id, inBusket])
    return (
        <section >
            <article className={styleProduct.blockPay}>
                <div className={styleProduct.salesManInfo}>
                    <Avatar radius={50} size={100} urlAvatar={data?.profilePhoto} userName={data?.name}/>
                    
                    <h2><Link style={{textDecoration: "none",color: 'white'}} href={"/user/" + data?.userId}>{data?.name}</Link></h2> 
                    <PlusSquare cursor={"pointer"} size={30} color="var(--purple-color-elem)"/>
                </div>
                

                <div className={styleProduct.btns}>
                    <Link style={{display:'block'}} href={'/messanger?chatID=1'}><button className={classChatBtn}>Написать</button></Link>
                    <button onClick={() => setShow(true)} className={styleProduct.pay} type="button">Купить</button>
                </div>
                <button disabled={inBusket ? true : false} style={inBusket ? {opacity: 0.8, cursor: 'no-drop'} : {}} onClick={addToBusket} className={classChatBtn}>{!inBusket ? 'Добавить в карзину' : 'Уже в корзине!'}</button>
                <DialogBusket show={show} setShow={setShow} cards={cards}/>
            </article>
        </section>
    )
}

export default BlockForPay