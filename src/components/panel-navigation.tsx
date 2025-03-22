'use client'

import React from "react";
import stylePanel from '../styles/panel-navigation.module.css'
import Header from "./header";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageCircle, PlusCircle, ShoppingCart, UserCircle } from "lucide-react";




const PanelNavigation = ({children}: {children: React.PropsWithChildren | React.ReactNode}) => {
    const locate = usePathname()
    

    return (
        <>
            <Header/>
            <div  style={{paddingBottom: "53px"}}></div>

            {children}
    
            <nav  className={stylePanel.navigationPanel}>
                <Link href="/home">
                    <div className={stylePanel.navigationButton} id="home">
                        <LayoutDashboard size={30} color="black" opacity={locate == "/home" ? 1 : 0.6}/>
                    </div>
                </Link>

                <Link href="/profile">
                    <div className={stylePanel.navigationButton} id="profile">
                        <ShoppingCart size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/>
                    </div>
                </Link>

                <Link href="/add-product">
                    <div className={stylePanel.navigationButton} id="add-product">
                        <PlusCircle size={30} opacity={locate == "/add-product" ? 1 : 0.6} color="black"/>
                    </div>
                </Link>   

                <Link href="/profile">
                    <div className={stylePanel.navigationButton} id="profile">
                        <MessageCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/>
                    </div>
                </Link>
                
                <Link href="/profile">
                    <div className={stylePanel.navigationButton} id="profile">
                        <UserCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/>
                    </div>
                </Link>
            </nav>
        </>
    )
}

export default PanelNavigation