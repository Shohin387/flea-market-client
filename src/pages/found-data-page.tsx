import { useSearchParams } from "react-router"
import AllCards from "../components/allCards"
import { useTypedSelector } from "../lib/hooks"


export default function FoundDataPage() {
    const foundCards = useTypedSelector(state => state.foundCardsReduxer).state
    const prompt = useSearchParams()
    console.log(foundCards)
    console.log(prompt)
    return (
        <>
            <h2 style={{marginLeft: 30 + "px"}}>Результаты по запросу - {prompt[0].get("prompt")}</h2>
            <AllCards ReducerData={foundCards}/>
        </>
    )
}