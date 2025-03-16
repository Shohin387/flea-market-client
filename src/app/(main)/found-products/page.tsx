import FoundDataPageComp from "@/components/pages-components/found-page"
import { Suspense } from "react"

export default function FoundDataPage() {

    return (
        <Suspense fallback={<div>Загрузка</div>}>
            <FoundDataPageComp />
        </Suspense>
    )
}