import { useParams } from "react-router"
import AllCards from "../components/allCards"
import { useTypedSelector } from "../lib/hooks"


export default function FoundDataPage() {
    const foundCards = useTypedSelector(state => state.foundCardsReduxer).state
    const {prompt} = useParams()
    console.log(foundCards)

    return (
        <>
            <h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {prompt}</h2>
            <AllCards ReducerData={foundCards}/>
        </>
    )
}