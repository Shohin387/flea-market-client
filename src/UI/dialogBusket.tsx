'use client'

import { CardsData } from "@/interfaces/cardData.interface";
import dialogStyle from '@/styles/dilogs.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function DialogBusket({cards, show=false, setShow}: {cards: CardsData[], show: boolean, setShow: Dispatch<SetStateAction<boolean>>}) {
	const [balance, setBalance] = useState(0)
	const [selected, setSelected] = useState<number[]>([])
	const [selectedCards, setSelectedCards] = useState<CardsData[]>([])

	const select = (id: number) => {
		setSelected((prev) => {
			if (prev.includes(id)) {
				return prev.filter(el => el !== id); // Удаляем, если уже был
			} return [...prev, id]
		})
	}

	useEffect(() => {
		localStorage.setItem('balance', '100000')
		const bal = JSON.parse(localStorage.getItem('balance')!)
		setBalance(bal)
	}, [])

	useEffect(() => {
		setSelectedCards(cards.filter(el => selected.includes(el?.id)))
	}, [selected])

	return (
		<>
		{ show ?
		<>
		<div onClick={() => setShow(false)} className={dialogStyle.bgBlur}></div>
			<article className={dialogStyle.dialog}>
				<h2>Оплата <p style={{display: 'inline-block', textAlign: 'right', width: '80%', fontSize: '20px'}}>Ваш Баланс: {balance}</p></h2>
				<div className={dialogStyle.itemsCnt}>
					<h2>Все товары </h2>
					<div className={dialogStyle.scroll}>
						{
							cards.map(el => (
								<div className={dialogStyle.item} key={el?.id}>
									{cards.length != 1 ?<input checked={selected.includes(el?.id)} onChange={() => select(el?.id)} className={dialogStyle.checking} type="checkbox" name="" id="" /> : <div></div>}
									<span style={{display: 'grid', alignItems: 'center'}}>
										<b style={{margin: '0px', fontSize: '23px',}}>{el?.nameProduct}</b>
										<p style={{margin: '0px', fontSize: '23px',}}>{el?.price} руб</p>
									</span>
									
									<div>
										{el?.imgSrc?.slice(0, 2 | 1).map((src, index) => (
											<div key={index} className={dialogStyle.imgCnt}>
												<img src={src!} alt="" />
											</div>
										))}
									</div>
								</div>
							))
						}
					</div>
					
				</div>
				<button className={dialogStyle.payBtn}>Оплатить | {cards.length != 1 ? selectedCards.reduce((sum, currentValue) => sum + currentValue.price, 0) : cards[0].price} руб</button>
			</article>
			
		</>
		
		: <></>}
		</>
		
	)
}