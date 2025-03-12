import {Dispatch, FC, memo, SetStateAction,} from "react"
import styleProduct from "../../statics/styles/product-page-style.module.css"
import { TypeAllData } from "./conteiner-info"
import { userDataI } from "../../interfaces/userData.interface"
import { RussianRuble } from "lucide-react"

interface Data {
    data: Omit<TypeAllData, keyof userDataI>,
    setIsFullScrean: Dispatch<SetStateAction<boolean>>
}


const PhotoAndInfo: FC<Data> = memo(({data, setIsFullScrean})=> {
    

    console.log(data)
    
    return (
        <div>
            <div style={{backgroundImage: `url(${data?.imgSrc})`, marginLeft: "20px", marginTop: "30px"}} className={styleProduct.conteiner}>
                <div className={`${styleProduct.conteiner} `}><img src={data?.imgSrc!} onClick={() => setIsFullScrean((prev) => !prev)} alt="" /></div>
            </div>
            <h1 className={styleProduct.priceProduct}>{data?.price} </h1><RussianRuble size={26} color="black"/>
            <p className={styleProduct.nameProduct}>{data?.nameProduct}</p>
            <div style={{marginLeft: "15px"}}>
                <h2>Описание </h2 ><div className={styleProduct.discription}><p style={{fontSize: "19px"}}>{data?.discription}</p></div>
                <div><h2>Местоположение</h2> <p style={{fontSize: "19px"}}>{data?.adress}</p></div>
            </div>
        </div>
    )
} )



export default PhotoAndInfo