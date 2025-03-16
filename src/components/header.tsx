'use client'

import  {FC} from "react";
import styleHeader from "../styles/header.module.css"
import { searchProduct } from "../lib/utils";
import { useTypedSelector } from "../lib/hooks";
import { CardsData } from "../interfaces/cardData.interface";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setStateFoundData } from "../store/FoundDataStore/foundDataStore.slice";
import {  Search } from "lucide-react";


const Header: FC = () => {
    const cards: CardsData[] = useTypedSelector(state => state.cardsReducer)
    const navigate = useRouter()
    const dispatch = useDispatch()


    return (
        <>
            <header className={styleHeader.header}>
                <b className={styleHeader.headerText}>Барахолка</b>
                <div className={styleHeader.searchBlock}>
                    <div>
                        <Search className={styleHeader.searchImg}/>
                        
                        <input className={styleHeader.headerInput} id="inputForSearch" autoComplete="false"  type="text" placeholder="Поиск в Борохолке"/>
                    </div>
                    

                    <button onClick={() => {
                        
                        const inp = document.getElementsByTagName("input")[0]

                        if (inp.value) {
                            const data = searchProduct(cards, inp.value)
                            dispatch(setStateFoundData(data))
                            console.log(data)
                            navigate.push('/found-products?prompt=' + inp.value)
                        } else navigate.push('/home')
                        
                      }} className={styleHeader.searchBtn} type="button">поиск</button>
                    
                    
                </div>
            </header>
        </>
    )
}

export default Header