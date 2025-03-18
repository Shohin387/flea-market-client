import ConteinerInfo from "@/components/product-page-components/conteiner-info"
import { Suspense } from "react"

const ProductPage: React.FC = () => {
    
    
    return (
        <section>
            <Suspense fallback={<div>Загрузка...</div>}>
                <ConteinerInfo />
            </Suspense>
            
        </section>
    )
} 

export default ProductPage