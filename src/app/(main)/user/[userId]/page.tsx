'use client'
import ConteinerProfile from "@/components/salesman-profiles-components/conteiner-profile";
import { useParams } from "next/navigation";


export default function userPage() {
	const {userId} = useParams()
	console.log(userId)
	return (<>
		<ConteinerProfile id={userId!.toString()}/>
	</>)
}