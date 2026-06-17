'use clint'
import cardStyle from '@/styles/card.module.css'
import Card from "../UI/card";
import styleCard from "../styles/card.module.css"
import { CardsData } from "../interfaces/cardData.interface";
import { Trash2 } from 'lucide-react';

const AllCards: React.FC< {ReducerData: CardsData[] | undefined, className?: string, onlySold?: boolean, busket?:boolean}> = ({onlySold=false, ReducerData, className=cardStyle.mainBlockCard, busket=false}) => { 
    const removeInBusket = (id: number) => {
        const busketData = localStorage.getItem('ids')
        const parseData: number[] = JSON.parse(busketData!)
        const newBusket =  parseData.filter(el => el !== id)
        localStorage.setItem('ids', JSON.stringify(newBusket))
        window.location.reload()
    }
    
    return (
        <section className={className}>
            {ReducerData?.map(el => (
                <div style={{display:`${!onlySold ? !el.sold ? "block" : "none":  el.sold ? "block" : "none"}`}} className={styleCard.card} key={el.id}>
                    {!onlySold ? !el.sold && <Card el={el}/> : el.sold && <Card el={el}/> }
                    {
                        busket ? <Trash2 onClick={() => removeInBusket(el.id)} color='red' style={{marginLeft:'84%', marginTop: '-10%'}}/> : <></>
                    }
                </div>
            ))}
        </section>
    )
}

export default AllCards