import  {FC} from "react";
import style from "../statics/styles/header.module.css"
import search from "../assets/img/search.png"

const Header: FC = () => {
    return (
        <>
            <header className={style.header}>
                <b className={style.headerText}>Барахолка</b>
                <div className={style.searchBlock}>
                    <div>
                        <img src={search} className={style.searchImg} alt="" />
                        <input autoComplete="false" type="text" placeholder="Поиск в Борохолке"/>
                    </div>
                    <button className={style.searchBtn} type="button">поиск</button>
                    
                </div>
            </header>
        </>
    )
}

export default Header