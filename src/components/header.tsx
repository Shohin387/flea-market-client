import  {FC} from "react";
import styleHeader from "../statics/styles/header.module.css"
import search from "../assets/img/search.png"

const Header: FC = () => {
    return (
        <>
            <header className={styleHeader.header}>
                <b className={styleHeader.headerText}>Барахолка</b>
                <div className={styleHeader.searchBlock}>
                    <div>
                        <img src={search} className={styleHeader.searchImg} alt="" />
                        <input autoComplete="false" type="text" placeholder="Поиск в Борохолке"/>
                    </div>
                    <button className={styleHeader.searchBtn} type="button">поиск</button>
                    
                </div>
            </header>
        </>
    )
}

export default Header