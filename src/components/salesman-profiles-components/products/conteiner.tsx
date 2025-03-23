'use client'

import { useEffect, useState } from "react";
import { useTypedSelector } from "@/lib/hooks";
import { CardsData } from "@/interfaces/cardData.interface";
import { useParams } from "next/navigation";
import AllCards from "@/components/allCards";
import cardStyle from '@/styles/card.module.css'
import profileStyle from '@/styles/profile.module.css'
import clsx from "clsx";
import Image from 'next/image'
import noProduct from '@/assets/no-product.svg'


export default function ConteinerProduct() {

	const {userId} = useParams()
	const [sold, setSold] = useState(false)
	const [data, setData] =useState<CardsData[]>([])
	const products: CardsData[] = useTypedSelector(state => state.cardsReducer)
	const columns = clsx(cardStyle.mainBlockCard, cardStyle.g_c_deinc1)

	useEffect(() => {
		const filtData = products.filter(value => value.userId == +userId!)
		setData(filtData)
	}, [])


	return (
		<section className={profileStyle.productCnt}>
			<div style={{marginBottom: '30px', textAlign: 'center'}}>
				<h2 onClick={() => setSold(false)} style={{display: 'inline', marginRight: '70px',  cursor: 'pointer', opacity: !sold ? 1 : 0.5}}>Активные</h2>
				<h2 onClick={() => setSold(true)} style={{display: 'inline', cursor: 'pointer', opacity: sold ? 1 : 0.5}}>Проданные</h2>
			</div>
			
			<div>
				{data.length
					? <AllCards onlySold={sold} className={columns} ReducerData={data}/>
					: <div style={{width: '100%', height: 'auto', display: 'grid', justifyContent: 'center', alignItems: 'center'}}>
							<h3>У продовца еще нет товыров</h3>
							<Image width={300} height={300} src={noProduct} alt="no" />
						</div>
				}
			</div>
			
		</section>
	)
}