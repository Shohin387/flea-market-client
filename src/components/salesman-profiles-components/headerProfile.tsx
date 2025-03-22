'use client'

import { useContext, useState } from "react"
import profileStyle from '@/styles/profile.module.css'
import SubscribersConteiner from "./subsComponent/SubscribersMainBlock"
import Avatar from "@/UI/Avatar"
import clsx from "clsx"
import { ContextUserData } from "./conteiner-profile"


export default function HeaderProfile({id}: {id: string}) {
    const moreSubsClass = clsx(profileStyle.textLink, profileStyle.moreSubs)
    const classSubsBtn = clsx(profileStyle.subsBtn, profileStyle.chatBtn)
    const [hidden, setHidden] = useState(true)
    const hiddenMoreSubs = clsx(profileStyle.mainBlockSupscribers, hidden ? profileStyle.hidden : '')
    const [countSubs, setCountSubs] = useState(0)
    const data = useContext(ContextUserData)
    console.log(hiddenMoreSubs)
    

    return (
        <section className={profileStyle.headerProfile}>
            <div className={profileStyle.photoProfile}>
                <Avatar urlAvatar={data?.profilePhoto} userName={data?.name}/>
                <h3>{data?.name}</h3>

                <p style={{fontSize: "13px"}}>{countSubs} подписчиков, 0 подписок <br />
                На Барахолке с {data?.dateRegestration}</p>
            </div>

            
            <article>
                <button className={classSubsBtn}>Написать</button>
                <button className={profileStyle.subsBtn} type="button">Подписаться</button> <br />
                <SubscribersConteiner className={hiddenMoreSubs} setCount={setCountSubs} cumirID={+id}/>
                {countSubs > 3 && <b onClick={() => setHidden(prev => !prev)} className={moreSubsClass}>{hidden ?"Показать еще" : "Скрыть"}</b>}
            </article>
        </section>
    )
}