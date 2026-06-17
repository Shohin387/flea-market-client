'use client'

import sideBar from '@/styles/side-bar.module.css'
import clsx from 'clsx'
import Link from 'next/link'
import { Dispatch, FC, SetStateAction } from 'react'


interface FiltersI {
	state: 'любое' | 'новое' | 'Б/У',
	salesmen: 'все' | 'Частные лица' | 'Компании',
	comnMethod: 'Все' | 'Звонки' | 'Сообщения',
	from: number,
	to: number
}

interface Props {
	filters:FiltersI | undefined,
	setFilters: Dispatch<SetStateAction<FiltersI>>,
	busket?: boolean,
	price?: number,
	setShow?: Dispatch<SetStateAction<Boolean>>
} 

const SideBar: FC<Props> = ({filters, setFilters, busket=false, price, setShow}) => {
	const activeFilterBtn = clsx(sideBar.filterBtn, sideBar.activeFilterBtn)


	const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.length == 0) setFilters(prev => ({...prev, to: 0}))
		else setFilters(prev => ({...prev, to: +event.target.value}))
	}
	const handleChangeFrom = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.length == 0) setFilters(prev => ({...prev, from: 0}))
		else setFilters(prev => ({...prev, from: +event.target.value}))
	}

	return (
		<section className={sideBar.filter}>
			{!busket
				? <div className={sideBar.categorys}>
					<h1 style={{textAlign: 'center'}}>Кaтегории</h1>
					<hr/>
					<ul style={{padding: 0}}>
						<li className={sideBar.category}><Link href={'/home'} style={{color: 'white'}}>Все</Link></li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Электроника'} style={{color: 'white'}}>Электроника</Link> </li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Одежда'} style={{color: 'white'}}>Одежда</Link> </li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Недвижимость'} style={{color: 'white'}}>Недвижимость</Link> </li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Бытовая техника'} style={{color: 'white'}}>Бытовая техника</Link></li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Транспорт'} style={{color: 'white'}}>Транспорт</Link> </li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Работа'} style={{color: 'white'}}>Работа</Link> </li>
						<li className={sideBar.category}><Link href={'/catalog?prompt=' + 'Услуги'} style={{color: 'white'}}>Услуги</Link> </li>
					</ul>
				</div>

				: <></>
			}
			
			
			<div>
				<h1 style={{textAlign: "center"}}>Фильтры</h1>
				<hr/>

				<b>Состояние</b><br/>
				<button onClick={() => setFilters(prev => ({...prev, state: 'любое'}))} className={filters?.state == 'любое' ? activeFilterBtn : sideBar.filterBtn}>Любое</button>
				<button onClick={() => setFilters(prev => ({...prev, state: 'новое'}))} className={filters?.state == 'новое' ? activeFilterBtn : sideBar.filterBtn}>Новое</button>
				<button onClick={() => setFilters(prev => ({...prev, state: 'Б/У'}))} className={filters?.state == 'Б/У' ? activeFilterBtn : sideBar.filterBtn}>Б/У</button>
				<br/><br/>

				<b>Цена: руб.</b><br/>
				<input onChange={event => handleChangeFrom(event)} className={sideBar.filterInp} type="number" placeholder="от"/><b style={{marginLeft: "2px", marginRight: "-1px", fontSize: "20px"}}>:</b>
				<input onChange={event => handleChangeTo(event)} className={sideBar.filterInp} type="number" placeholder="до"/>
				<br/><br/>

				<b>Продавец</b><br/>
				<button onClick={() => setFilters(prev => ({...prev, salesmen: 'все'}))} className={filters?.salesmen == 'все' ? activeFilterBtn : sideBar.filterBtn}>Все</button>
				<button onClick={() => setFilters(prev => ({...prev, salesmen: 'Частные лица'}))} className={filters?.salesmen == 'Частные лица' ? activeFilterBtn : sideBar.filterBtn}>Частные</button>
				<button onClick={() => setFilters(prev => ({...prev, salesmen: 'Компании'}))} className={filters?.salesmen == 'Компании' ? activeFilterBtn : sideBar.filterBtn}>Компании</button>
				<br/><br/>

				<b>Способ связи</b><br/>
				<button onClick={() => setFilters(prev => ({...prev, comnMethod: 'Все'}))} className={filters?.comnMethod == 'Все' ? activeFilterBtn : sideBar.filterBtn}>Все</button>
				<button onClick={() => setFilters(prev => ({...prev, comnMethod: 'Звонки'}))} className={filters?.comnMethod == 'Звонки' ? activeFilterBtn : sideBar.filterBtn}>Звонки</button>
				<button onClick={() => setFilters(prev => ({...prev, comnMethod: 'Сообщения'}))} className={filters?.comnMethod == 'Сообщения' ? activeFilterBtn : sideBar.filterBtn}>Сообщения</button>
				
			</div>

			{busket
				? <div>
					<hr />
					<h1 className={sideBar.noScrollBar} style={{overflowX: 'scroll', width: '100%', textWrap:'nowrap'}}>ИТОГО: {price}руб</h1>
					<button disabled={price ? false : true} onClick={() => setShow!(true)} style={price ? {}: {cursor: 'no-drop', opacity: 0.8}} className={sideBar.pay}>Оплатить</button>
				</div>

				: <></>
			}
		</section>
			
	)
}

export default SideBar