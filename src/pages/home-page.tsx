import React, {FC} from "react";
import AllCards from "../components/cards-components/allCards";

const HomePage: FC = (): JSX.Element => {
    return(
        <>
        <h1>home</h1>
        <AllCards />
        </>
    )
}

export default HomePage