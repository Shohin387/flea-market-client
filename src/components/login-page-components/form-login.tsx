'use client'

import { FC, useEffect, useState} from "react"
import styleForm from '../../styles/form-style.module.css'
import Input from "../../UI/MyInput"
import { LogInIcon } from "lucide-react"

const LogInProfile: FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")

    useEffect(() => {
        if (email && password) {
            if (password.length >= 8) setErr("");
            else setErr("Минимум 8 символов");
            
        } else setErr("Заполните все поля")
    }, [email, password])


    return (
        <section className={styleForm.addProduct}>
            <h1 style={{marginLeft: "15%"}}>С возвращением!</h1>
        <form className={styleForm.formAddProduct} action="http://localhost:3001/api/addPosts">
        
            <Input typeInp="email" value={email} setValue={setEmail} name="email" classNameInp={styleForm.InputDiscription}  placeholderInput="Введите ваш E-mail"/><br />
            <Input typeInp="password" value={password} setValue={setPassword} name="password" classNameInp={styleForm.InputDiscription} placeholderInput="Пароль"/> <br />
             <b><input type="checkbox" style={{width: "17px;", height: "17px"}} name="" id="" /> Принимаю все условия</b><br />
            <button className={styleForm.btnForPublic} type={!err ? "submit" : "reset"}><LogInIcon size={20} color="white"/> Войти</button>
            
            <a style={{textDecoration: "none", fontSize: "12px", marginTop: "10px"}} href="/auth">Ещё не зарегестрированны?</a>
        </form>
        
        </section>
    )
}

export default LogInProfile