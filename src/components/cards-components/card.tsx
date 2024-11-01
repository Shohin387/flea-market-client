import React from "react";
import {CardsData} from "../../interfaces/cardData.interface";

interface el {
    el: CardsData
}

const Card: React.FC<el> = ({el}): JSX.Element => {
    
    return (
        <>
            {el.nameProdyct}
        </>
    )
}

export default Card