'use client'


import AllCards from "@/components/allCards";
import SideBar from "@/components/side-bar";
import { useContext } from "react";
import { FilterCntx } from "../../FilterProvider";



const HomePage = () => {
	const data = useContext(FilterCntx)
	console.log(data?.cardsReducer)
	return(
		<>
			<section>
				<h2 style={{marginLeft: "30px"}}>Товары</h2>
				<AllCards ReducerData={data!.cardsReducer}/>
			</section>
			<SideBar filters={data!.filters} setFilters={data!.setFilters}/>
		</>
			
 	)
}

export default HomePage