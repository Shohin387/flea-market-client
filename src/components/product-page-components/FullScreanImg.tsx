import { Dispatch, FC, SetStateAction } from 'react'
import style from '../../styles/product-page-style.module.css'
import Image from 'next/image'


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
                    <Image className={style.FSImg} src={img} alt="Full screen image"/> 
                </div>
            </div>
            : <></>
        }
        </>
    )
}