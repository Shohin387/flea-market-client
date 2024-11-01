import React, {FC} from "react";
import AllCards from "../components/cards-components/allCards";

const HomePage: FC = (): JSX.Element => {
    return(
        <>
        <h1 style={{marginLeft: 30 + "px"}}>Home</h1>
        <AllCards />
        </>
    )
}

export default HomePage