

import {Dispatch, FC, SetStateAction,} from "react"
import styleProduct from "../../styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info"
import { userDataI } from "../../interfaces/userData.interface"
import { ArrowLeft, RussianRuble } from "lucide-react"
import Link from "next/link"
import SimilarProducts from "./SimilarProducts"

interface Data {
    data: Omit<TypeAllData, keyof userDataI>,
    setIsFullScrean: Dispatch<SetStateAction<boolean>>
}


const PhotoAndInfo: FC<Data> = ({data, setIsFullScrean}) => {
    

    console.log(data)
    
    return (
        <article>
            <Link href='/home'><ArrowLeft color="black" style={{margin:"10px 20px -20px 2%"}}/></Link>

            <div style={{backgroundImage: `url(${data?.imgSrc})`, marginLeft: "3%", marginTop: "30px"}} className={styleProduct.conteiner}>
                <div className={`${styleProduct.conteiner} `}>
                    <img src={data?.imgSrc!} onClick={() => setIsFullScrean((prev) => !prev)} alt="" />
                </div>
            </div>

            <h1 className={styleProduct.priceProduct}>{data?.price} </h1><RussianRuble size={26} color="black"/>
            <p className={styleProduct.nameProduct}>{data?.nameProduct}</p>
            <div style={{marginLeft: "3%"}}>
                <h2 style={{fontSize: "clamp(20px, 4vw, 28px)"}}>Описание </h2 >
                <div className={styleProduct.discription}>
                    <p>{data?.discription}</p>
                </div>
                <div>
                    <h2  style={{fontSize: "clamp(20px, 4vw, 28px)"}}>Местоположение</h2> 
                    <p style={{fontSize: "clamp(16px, 3vw, 20px)"}}>{data?.adress}</p>
                </div>
            </div>
        </article>
    )
}



export default PhotoAndInfo