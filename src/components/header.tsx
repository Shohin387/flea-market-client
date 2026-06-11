'use client'

import  {FC} from "react";
import styleHeader from "../styles/header.module.css"
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Image from 'next/image'

const Header: FC = () => {
    const navigate = useRouter()

    return (
        <>
            <header className={styleHeader.header}>
                <Image width={200} height={40} src='/logo.png' alt="logo" />
                <div className={styleHeader.searchBlock}>
                    <div>
                        <Search className={styleHeader.searchImg}/>
                        
                        <input className={styleHeader.headerInput} id="inputForSearch" autoComplete="false"  type="text" placeholder="Поиск в Борохолке"/>
                    </div>
                    

                    <button onClick={() => {
                        const inp = document.getElementsByTagName("input")[0]
                        if (inp.value) {
                            navigate.push('/found-products?prompt=' + inp.value)
                            console.log(inp.value)
                        } else navigate.replace('/home')
                        
                      }} className={styleHeader.searchBtn} type="button">поиск</button>
                    
                    
                </div>
            </header>
        </>
    )
}

export default Header