'use client'

import { FC } from "react";
import styleProduct from "../../styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info";
import { PlusSquare } from "lucide-react";
import clsx from "clsx";
import Link from 'next/link'
import Avatar from "@/UI/Avatar";


const BlockForPay: FC<{data: TypeAllData}> = ({data}) => {
    
    const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)

    return (
        <section >
            <article className={styleProduct.blockPay}>
                <div className={styleProduct.salesManInfo}>
                    <Avatar urlAvatar={data?.profilePhoto} userName={data?.name}/>
                    
                    <h2><Link style={{textDecoration: "none", color: "black"}} href={"/user/" + data?.userId}>{data?.name}</Link></h2> 
                    <PlusSquare cursor={"pointer"} size={30} color="var(--purple-color-elem)"/>
                </div>
                

                <div className={styleProduct.btns}>
                    <button className={classChatBtn}>Написать</button>
                    <button className={styleProduct.pay} type="button">Добавить в карзину</button>
                </div>
            </article>
        </section>
    )
}

export default BlockForPay