import { Dispatch, FC, SetStateAction } from 'react'
import style from '../../styles/product-page-style.module.css'
import styleProduct from '@/styles/product-page-style.module.css'
import clsx from 'clsx'


interface FulllScreanImg {
    setIsFullScrean: Dispatch<SetStateAction<boolean>>,
    isFullScrean: boolean,
    img: string
}


export  const  FulllScreanImg: FC<FulllScreanImg> = ({setIsFullScrean, isFullScrean, img}) => {

   const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)
   const btns = clsx(styleProduct.btns, style.btnForMobileV)
    

    return (
        <>
        {
            isFullScrean ?
            <>
                <div onClick={() => setIsFullScrean(prev => !prev)} className={style.ConteinerFSImg}>
                    <div className={style.wrapper}>
                        <img className={style.FSImg} src={img} alt="Full screen image"/> 
                    </div>
                </div>
                <div className={btns}>
                    <button className={classChatBtn}>Написать</button>
                    <button className={styleProduct.pay} type="button">Добавить в карзину</button>
                </div>
            </>

            : <></>
        }
        </>
    )
}