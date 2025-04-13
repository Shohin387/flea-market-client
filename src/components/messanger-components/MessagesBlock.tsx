import { msgsData } from "@/data/msgsData";
import { MsgsI } from "@/interfaces/msgs.interface";
import { useEffect, useState } from "react";
import msgStyle from '@/styles/messanger.module.css'
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import Input from "@/UI/MyInput";


export default function Messages({chatID}: {chatID: string | null}) {
	const [msgs, setMsgs] = useState<MsgsI[]>([])
	useEffect(() => {
		const filtMsgs = msgsData.filter(value => value.chatID === +chatID!)
		setMsgs(filtMsgs)
	}, [chatID])
	console.log(chatID)
	return (
		<>
			
			<article className={msgStyle.allMsgs}>
			{
				msgs.map(el => (
					<div key={el.id}>
					{
						el.senterID != 1 ?
						<div  className={msgStyle.CntMsg} >
							<ArrowRight style={{marginTop: '10px'}} size={25} display={'inline'} />
							<p className={msgStyle.msg} >{el.value}</p>
						</div>
						: <div className={`${msgStyle.myMsg} ${msgStyle.CntMsg}`} >
							<p className={`${msgStyle.msg} ${msgStyle.rtl}`} >{el.value}</p>
							<ArrowLeft style={{marginTop: '10px', marginLeft: '9px'}} size={25} display={'inline'} />
						</div>
					}
					</div>
				))
			}
			</article>

			<div style={{
				backgroundColor: 'rgb(46, 46, 46)',
				borderTop: 'solid rgb(22, 22, 22) 1.5px'
			}}>
				<Input placeholderInput="Введите сообение..." typeInp="text" animation={false} classNameInp={msgStyle.inpForSendMsg}/>
				<Send cursor={'pointer'} style={{marginBottom: '-7px'}} color='rgb(128, 128, 128)'/>
			</div>
		</>
	)
}