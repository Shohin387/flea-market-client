import { FC } from "react";
import { Data } from "./photo-and-info";
import styleProduct from "../../statics/styles/product-page-style.module.css"


const BlockForPay: FC<Data> = ({data}) => {
    return (
        <section >
            <div className={styleProduct.blockPay}>
                <h1 className={styleProduct.priceProduct}>{data?.price} руб</h1>
                <button className={styleProduct.pay} type="button">Купить</button>
            </div>
            
        </section>
    )
}

export default BlockForPay