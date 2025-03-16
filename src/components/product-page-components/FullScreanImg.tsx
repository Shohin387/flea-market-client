import { Dispatch, FC, SetStateAction } from 'react'
import style from '../../styles/product-page-style.module.css'


interface FulllScreanImg {
    setIsFullScrean: Dispatch<SetStateAction<boolean>>,
    isFullScrean: boolean,
    img: string
}


export  const  FulllScreanImg: FC<FulllScreanImg> = ({setIsFullScrean, isFullScrean, img}) => {
    return (
        <>
        {
            isFullScrean ?
            <div onClick={() => setIsFullScrean(prev => !prev)} className={style.ConteinerFSImg}>
                <div className={style.wrapper}>
                    <img className={style.FSImg} src={img} alt=""/> 
                </div>
            </div>
            : <></>
        }
        </>
    )
}