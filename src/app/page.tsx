'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RediractPage() {
	const router = useRouter()
	useEffect(() => router.replace('/home'), [])

	return(<></>)
}