import { Dispatch, FC, SetStateAction } from 'react'
import style from '../../styles/product-page-style.module.css'
import styleProduct from '@/styles/product-page-style.module.css'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


interface FulllScreanImg {
    setIsFullScrean: Dispatch<SetStateAction<boolean>>,
    isFullScrean: boolean,
    img: string[] | undefined
}


export  const  FulllScreanImg: FC<FulllScreanImg> = ({setIsFullScrean, isFullScrean, img}) => {

   const classChatBtn = clsx(styleProduct.pay, styleProduct.chatBtn)
   const btns = clsx(styleProduct.btns, style.btnForMobileV)
    

    return (
        <>
        {
            isFullScrean ?
            <>
                <div  className={style.ConteinerFSImg}>
                    
                    {img!.length > 1 ?
                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} className={style.wrapper}>
                        <Swiper 
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            allowTouchMove={false}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop
                            style={{width: '100%', height: 'auto'}}
                        >
                            {
                                img?.map((src, index) => (
                                    <SwiperSlide style={{display: 'grid', justifyContent: 'center'}} key={index}>
                                        <div style={{backgroundColor: 'black', height: '100vh'}} className={style.wrapper}>
                                            <img onClick={() => setIsFullScrean((prev) => !prev)} src={src} alt="" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                       
                        
                        :<div className={style.wrapper}><img onClick={() => setIsFullScrean((prev) => !prev)} src={img![0]} alt="" /></div>
                        }
                    
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