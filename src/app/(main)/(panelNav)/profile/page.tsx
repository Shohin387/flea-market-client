'use client'

import profile from '@/styles/userProfile.module.css'
import clsx from 'clsx'
import men from '@/assets/men.png'
import Image from 'next/image'
import AllCards from '@/components/allCards'
import { useTypedSelector } from '@/lib/hooks'


export default function Profile() {
	const cards = useTypedSelector(state => state.cardsReducer)
	return (
		<>
		<main className={clsx(profile.conteinerMyProfile, profile.conteinerProfile)}>
			<section className={profile.headerProfile}>
        <div className={profile.photoProfile}>
            <div className={profile.avatar}>
							<Image width={590} height={420} src={men} alt="" />
							<div className={profile.blur}></div>
							<h3 className={clsx(profile.name, profile.m_20)}>Олег</h3>
						</div>
            
        </div>
        
        
      <article className={profile.cards}>

          <h1>Мои товары</h1>

					<div >
						<AllCards className={clsx(profile.mainBlockCard, profile.g_c_deinc1, profile.column_2)} ReducerData={cards}/>
					</div>
		  </article>
    </section>
			


		<section>
			
      <article className={ profile.textRight}>
        <h1>Бадалов Шохин</h1>
        <h1 style={{marginTop: '20px', marginBottom: 0}}>@Sh</h1>
        <b style={{fontSize: '13px', fontStyle: 'normal', opacity: 0.6, margin: 0}}>имя польователя</b>
        <p><b>Телефон:</b> +7 999 422 81 82 <br/>
					<b>Подписчиков:</b> 3 <br/>
					<b>Аккаунт: </b> Не подтвержден<br/>
					<b>На платформе с:</b> 14.08.2025 <br/>
					<b>Средний балл:</b> 4.8/5
        </p>

        <div className={profile.wallet}>
					<img className={profile.arrow_wallet} src="../img/arrow_wallet.png"/>
          <div className={profile.balance}>
            <h3>0 руб.</h3>
            <p style={{margin: 0, color: 'rgba(255, 255, 255, 0.775)'}}>Быстрый кошелек</p>
          </div>
        </div>
      </article>
            
			<article className={clsx(profile.m_20, profile.right)}>
            <h2 style={{textAlign: 'right', width: '150%', marginBottom: '50px'}}>Мои отзывы</h2><br/>
            <div className={clsx(profile.mainBlockSupscribers, profile.ot)}>
              <div className={profile.blockSupscribers}>
                <div className={profile.avatar_subs}>
                  <Image  src={men} alt="" />
                </div>
                <div>
                  <a className={profile.noTxtDecore}>
                    <h3 className={profile.textLink}>Кирилл Борисенко</h3>
                    <p style={{marginTop: '0px'}} className={profile.otz}>Отличный продовец советую всем!</p>
                  </a>
                </div>
                <span><h2 style={{fontSize: '22px'}}>5/5</h2></span>
						  </div>
							
							
              <div className={profile.blockSupscribers}>
                <div className={profile.avatar_subs}>
                  <Image src={men} alt="" />
                </div>
                <div>
                  <a className={profile.noTxtDecore}>
                    <h3 className={profile.textLink}>Кирилл Борисенко</h3>
                    <p style={{marginTop: '0px'}} className={profile.otz}>Отличный продовец советую всем!</p>
                  </a>
                </div>
                <span><h2 style={{fontSize: '22px'}}>5/5</h2></span>
						  </div><div className={profile.blockSupscribers}>
                <div className={profile.avatar_subs}>
                  <Image  src={men} alt="" />
                </div>
                <div>
                  <a className={profile.noTxtDecore}>
                    <h3 className={profile.textLink}>Кирилл Борисенко</h3>
                    <p style={{marginTop: '0px'}} className={profile.otz}>Отличный продовец советую всем!</p>
                  </a>
                </div>
                <span><h2 style={{fontSize: '22px'}}>5/5</h2></span>
						  </div><div className={profile.blockSupscribers}>
                <div className={profile.avatar_subs}>
                  <Image  src={men} alt="" />
                </div>
                <div>
                  <a className={profile.noTxtDecore}>
                    <h3 className={profile.textLink}>Кирилл Борисенко</h3>
                    <p style={{marginTop: '0px'}} className={profile.otz}>Отличный продовец советую всем!</p>
                  </a>
                </div>
                <span><h2 style={{fontSize: '22px'}}>5/5</h2></span>
						  </div><div className={profile.blockSupscribers}>
                <div className={profile.avatar_subs}>
                  <Image  src={men} alt="" />
                </div>
                <div>
                  <a className={profile.noTxtDecore}>
                    <h3 className={profile.textLink}>Кирилл Борисенко</h3>
                    <p style={{marginTop: '0px'}} className={profile.otz}>Отличный продовец советую всем!</p>
                  </a>
                </div>
                <span><h2 style={{fontSize: '22px'}}>5/5</h2></span>
						  </div>

            
          </div>
        </article>
		</section>
		</main>
		</>
	)
}