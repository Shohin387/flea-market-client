

import Card from "../UI/card";
import styleCard from "../styles/card.module.css"
import { CardsData } from "../interfaces/cardData.interface";

const AllCards: React.FC< {ReducerData: CardsData[], className: string}> = ({ReducerData, className}) => {
    return (
        <section className={className}>
            {ReducerData.map(el => (
                <div className={styleCard.card} key={el.id}>
                    <Card el={el}/>
                </div>
            ))}
        </section>
    )
}

export default AllCards