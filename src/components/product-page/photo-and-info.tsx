import {FC, memo,} from "react"
import styleProduct from "../../statics/styles/product-page-style.module.css"
import { CardsData } from "../../interfaces/cardData.interface"

interface Data {
    data: CardsData
}

const PhotoAndInfo: FC<Data> = memo(({data})=> {
    

    console.log(data)
    
    return (
        <div>
            <h1 className={styleProduct.nameProduct}>{data?.nameProdyct}</h1>
            <div style={{backgroundImage: `url(${data?.imgSrc})`, marginLeft: "20px"}} className={styleProduct.conteiner}>
                <div className={`${styleProduct.conteiner} `}><img src={data?.imgSrc!} alt="" /></div>
            </div>
            <div style={{marginLeft: "15px"}}>
                <h2>Описание </h2 ><div className={styleProduct.discription}><p style={{fontSize: "19px"}}>{data?.discription}</p></div>
                <div><h2>Местоположение</h2> <p style={{fontSize: "19px"}}>{data?.adress}</p></div>
            </div>
        </div>
    )
} )


export type {Data}
export default PhotoAndInfo