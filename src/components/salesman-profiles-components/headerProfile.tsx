'use client'

import { useContext, useState } from "react"
import profileStyle from '@/styles/profile.module.css'
import SubscribersConteiner from "./subsComponent/SubscribersMainBlock"
import Avatar from "@/UI/Avatar"
import clsx from "clsx"
import { ContextUserData } from "./conteiner-profile"
import { Send } from "lucide-react"


export default function HeaderProfile({id}: {id: string}) {
    const moreSubsClass = clsx(profileStyle.textLink, profileStyle.moreSubs)
    const classSubsBtn = clsx(profileStyle.subsBtn, profileStyle.chatBtn)
    const [countSubs, setCountSubs] = useState(0)
    const data = useContext(ContextUserData)
    

    return (
        <section className={profileStyle.headerProfile}>
            <div className={profileStyle.photoProfile}>
                <Avatar urlAvatar={data?.profilePhoto} userName={data?.name}/>
                <h3 className={data?.profilePhoto ? clsx(profileStyle.name, profileStyle.m_20) : profileStyle.m_20}>{data?.name}</h3>
                
                <p className={data?.profilePhoto ? `${profileStyle.countSubs} ${profileStyle.m_20} ${profileStyle.mobile}` : `${profileStyle.m_20}`} >{countSubs} Подписчиков<br /></p>

                <h2 className={profileStyle.m_20} style={{fontSize: "20px",  marginTop: '20px'}}>{data?.userName}<br /> 
                <b style={{fontSize: '13px', fontStyle: 'normal', opacity: 0.6}}>Имя пользователя</b></h2>
                <p className={profileStyle.m_20}  style={{fontSize: "13px"}}>На Барахолке с {data?.dateRegestration}</p>

            </div>

            
            <article className={profileStyle.m_20}>
                <button  className={classSubsBtn}>Написать</button>
                <button className={profileStyle.subsBtn} type="button">Подписаться</button> <br />
                <SubscribersConteiner className={profileStyle.mainBlockSupscribers} setCount={setCountSubs} cumirID={+id}/>
            </article>
        </section>
    )
}
