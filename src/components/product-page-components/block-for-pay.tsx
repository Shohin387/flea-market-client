import { FC } from "react";
import styleProduct from "../../statics/styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info";
import { PlusSquare, UserCircle } from "lucide-react";
import { Link } from "react-router";
import clsx from "clsx";



const BlockForPay: FC<{data: TypeAllData}> = ({data}) => {
    
    const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)

    return (
        <section >
            <article className={styleProduct.blockPay}>
                <div className={styleProduct.salesManInfo}>
                    {data?.profilePhoto ? 
                    <img className={styleProduct.profilePhoto} src={data?.profilePhoto} alt=""  />
                     : <UserCircle size={70} enableBackground={"red"} color="var(--purple-color-elem)"/>} 
                    
                    <h2><Link style={{textDecoration: "none", color: "black"}} to={"/user/" + data?.id}>{data?.userName}</Link></h2> 
                    <PlusSquare cursor={"pointer"} size={30} color="var(--purple-color-elem)"/>
                </div>

                <button className={styleProduct.pay} type="button">Добавить в карзину</button>
                <button className={classChatBtn}>Написать</button>
            </article>
        </section>
    )
}

export default BlockForPay