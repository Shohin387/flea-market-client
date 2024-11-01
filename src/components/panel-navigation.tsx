import React from "react";
import style from '../statics/styles/panel-navigation.module.css'
import Header from "./header";

interface Child {
    children?: React.ReactChild | React.ReactNode
}
const PanelNavigation: React.FC<Child> = ({children}) => {
    return (
        <>
        <Header/>

        {children}
        <section className={style.navigationPanel}>
            
            <a href="/"><div className={style.navigationButton} id="home-page"><img src="src/assets/img/home-page.png"/></div></a>
            <a href="/add-product"><div className={style.navigationButton} id="add-product"><img src="src/assets/img/add-product.png" alt="" /></div></a>
            <a href="/profile"><div className={style.navigationButton} id="profile"><img src="src/assets/img/profile.png" alt="" /></div></a>
        </section>
        </>
    )
}

export default PanelNavigation