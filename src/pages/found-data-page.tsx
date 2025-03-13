import { useSearchParams } from "react-router"
import AllCards from "../components/allCards"
import { useTypedSelector } from "../lib/hooks"


export default function FoundDataPage() {
    const foundCards = useTypedSelector(state => state.foundCardsReduxer).state
    const prompt = useSearchParams()
    console.log(foundCards)

    return (
        <>
            <h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {prompt[0]}</h2>
            <AllCards ReducerData={foundCards}/>
        </>
    )
}