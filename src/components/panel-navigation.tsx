import React from "react";
import stylePanel from '../statics/styles/panel-navigation.module.css'
import Header from "./header";
import { Outlet } from "react-router";
import { LayoutDashboard, MessageCircle, PlusCircle, ShoppingCart, UserCircle } from "lucide-react";
import { useLocation } from "react-router";


const PanelNavigation: React.FC = () => {
    const locate = useLocation().pathname
    console.log(locate)
    return (
        <>
        <Header/>
        <Outlet/>
        <nav className={stylePanel.navigationPanel}>
            <a href="/"><div className={stylePanel.navigationButton} id="home-page"><LayoutDashboard size={30} color="black" opacity={locate == "/" ? 1 : 0.6}/></div></a>
            <a href="/profile"><div className={stylePanel.navigationButton} id="profile"><ShoppingCart size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></a>
            <a href="/add-product"><div className={stylePanel.navigationButton} id="add-product"><PlusCircle size={30} opacity={locate == "/add-product" ? 1 : 0.6} color="black"/></div></a>            
            <a href="/profile"><div className={stylePanel.navigationButton} id="profile"><MessageCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></a>
            <a href="/profile"><div className={stylePanel.navigationButton} id="profile"><UserCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></a>
        </nav>
        </>
    )
}

export default PanelNavigation