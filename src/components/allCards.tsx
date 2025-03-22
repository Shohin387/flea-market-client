
import cardStyle from '@/styles/card.module.css'
import Card from "../UI/card";
import styleCard from "../styles/card.module.css"
import { CardsData } from "../interfaces/cardData.interface";

const AllCards: React.FC< {ReducerData: CardsData[], className?: string, onlySold?: boolean}> = ({onlySold=false, ReducerData, className=cardStyle.mainBlockCard}) => {
    return (
        <section className={className}>
            {ReducerData.map(el => (
                <div style={{display: `${!onlySold ? !el.sold ? "block" : "none":  el.sold ? "block" : "none"}`}} className={styleCard.card} key={el.id}>
                    {!onlySold ? !el.sold && <Card el={el}/> : el.sold && <Card el={el}/> }
                </div>
            ))}
        </section>
    )
}

export default AllCards