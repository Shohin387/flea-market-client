import { FC } from "react";
import styleProduct from "../../styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info";
import { PlusSquare, UserCircle } from "lucide-react";
import clsx from "clsx";
import Link from 'next/link'
import Image from "next/image";


const BlockForPay: FC<{data: TypeAllData}> = ({data}) => {
    
    const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)

    return (
        <section >
            <article className={styleProduct.blockPay}>
                <div className={styleProduct.salesManInfo}>
                    {data?.profilePhoto ? 
                    <Image className={styleProduct.profilePhoto} src={data?.profilePhoto} alt="Saleman photo"  />
                     : <UserCircle size={70} enableBackground={"red"} color="var(--purple-color-elem)"/>} 
                    
                    <h2><Link style={{textDecoration: "none", color: "black"}} href={"/user/" + data?.id}>{data?.userName}</Link></h2> 
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