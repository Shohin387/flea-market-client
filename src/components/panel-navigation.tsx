import React from "react";
import stylePanel from '../statics/styles/panel-navigation.module.css'
import Header from "./header";

interface Child {
    children?: React.ReactChild | React.ReactNode
}
const PanelNavigation: React.FC<Child> = ({children}) => {
    return (
        <>
        <Header/>

        {children}
        <section className={stylePanel.navigationPanel}>
            
            <a href="/"><div className={stylePanel.navigationButton} id="home-page"><img src="src/assets/img/home-page.png"/></div></a>
            <a href="/add-product"><div className={stylePanel.navigationButton} id="add-product"><img src="src/assets/img/add-product.png" alt="" /></div></a>
            <a href="/profile"><div className={stylePanel.navigationButton} id="profile"><img src="src/assets/img/profile.png" alt="" /></div></a>
        </section>
        </>
    )
}

export default PanelNavigation