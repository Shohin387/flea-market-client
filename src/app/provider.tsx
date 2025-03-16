'use client'

import { Store } from "@/store/Store";
import React from "react";
import { Provider } from "react-redux";

export default function MyProvider({children}: {children: React.ReactNode}) {

	return (
		<Provider store={Store}>
				{children}
		</Provider>
	)

}