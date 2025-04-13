'use client'

import { ComponentState, FC, useEffect, useState } from "react";
import styleForm from '@/styles/form-style.module.css'

interface Input {
    placeholderInput: string,
    value?: string,
    setValue?: ComponentState
    disable?: boolean,
    name?: string,
    classNameInp: string,
    classNameCnt?: string,
    animation?: boolean,
    typeInp: string
}

const Input: FC<Input> = ({placeholderInput, typeInp, setValue, classNameCnt, value, disable=false, name, classNameInp, animation=true}) => {
    const [placeholderClass, setPlaceholderClass] = useState(styleForm.placeholder)
    const [placeholderValue, setPlaceholderValue] = useState(placeholderInput)

    useEffect(() => {
        if (animation) {
            if (value) {
                setPlaceholderClass(styleForm.placeholderActive)
            } else {
                setPlaceholderClass(styleForm.placeholder)
            }
        } else {
            if (value) {
                setPlaceholderValue("")
            } else {
                setPlaceholderValue(placeholderInput)
            }
        }
        
    }, [value])

    return (
        <label className={classNameCnt} htmlFor={name}>
            <div className={placeholderClass}>{animation ? placeholderValue : ''}</div>
            <input placeholder={!animation ? placeholderValue : ''} autoComplete="off" name={name} className={classNameInp} onChange={el => setValue(el.target.value)} type={typeInp} value={value} disabled={disable}/>
        </label>
    )
}

export default Input