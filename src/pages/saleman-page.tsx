import HeaderProfile from "../components/salesman-profiles-components/headerProfile";
import { useParams } from "react-router";


export default function SalemanPage() {
    const {id} = useParams()

    return (
        <HeaderProfile id={id!}/>
    )
}