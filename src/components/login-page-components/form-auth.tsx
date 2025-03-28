'use client'

import { FC, useState} from "react"
import styleForm from '@/styles/form-style.module.css'
import Input from "@/UI/MyInput"
import { UserPlus } from "lucide-react"


const CreateProfile: FC = () => {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")



    return (
        <section className={styleForm.addProduct}>
            <h1>Создайте учетную запись</h1>
        <form  className={styleForm.formAddProduct} action="http://localhost:3001/api/auth">
            <Input typeInp="email" name="email" value={email} setValue={setEmail} classNameInp={styleForm.InputDiscription}  placeholderInput="Введите ваш E-mail"/><br />
            <Input typeInp="text" value={userName} setValue={setUserName} name="user-name" classNameInp={styleForm.InputDiscription}  placeholderInput="Имя Пользователя"/><br />
            <Input typeInp="password" value={password} setValue={setPassword} name="password" classNameInp={styleForm.InputDiscription} placeholderInput="Пароль"/> <br />
             <b><input type="checkbox" style={{width: "17px;", height: "17px"}} name="" id="" /> Принимаю все условия</b>

            <button className={styleForm.btnForPublic}  type={'reset'} ><UserPlus size={20} color="white"/> <b>Зарегестрироватся</b> </button>
            
            <a style={{textDecoration: "none", fontSize: "12px", marginTop: "10px"}} href="/log-in">Уже зарегестрированны?</a>
        </form>
        
        </section>
    )
}

export default CreateProfile