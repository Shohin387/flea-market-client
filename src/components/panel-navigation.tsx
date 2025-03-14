import React from "react";
import stylePanel from '../statics/styles/panel-navigation.module.css'
import Header from "./header";
import { Link, Outlet } from "react-router";
import { LayoutDashboard, MessageCircle, PlusCircle, ShoppingCart, UserCircle } from "lucide-react";
import { useLocation } from "react-router";


const PanelNavigation: React.FC = () => {
    const locate = useLocation().pathname
    console.log(locate)
    return (
        <>
        <Header/>
        <div style={{paddingBottom: "60px"}}></div>
        <Outlet/>
        <nav className={stylePanel.navigationPanel}>
            <Link to="/"><div className={stylePanel.navigationButton} id="home-page"><LayoutDashboard size={30} color="black" opacity={locate == "/" ? 1 : 0.6}/></div></Link>
            <Link to="/profile"><div className={stylePanel.navigationButton} id="profile"><ShoppingCart size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></Link>
            <Link to="/add-product"><div className={stylePanel.navigationButton} id="add-product"><PlusCircle size={30} opacity={locate == "/add-product" ? 1 : 0.6} color="black"/></div></Link>            
            <Link to="/profile"><div className={stylePanel.navigationButton} id="profile"><MessageCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></Link>
            <Link to="/profile"><div className={stylePanel.navigationButton} id="profile"><UserCircle size={30} opacity={locate == "/profile" ? 1 : 0.6} color="black"/></div></Link>
        </nav>
        </>
    )
}

export default PanelNavigation