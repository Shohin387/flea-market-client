'use client'

import { ComponentState, FC, useEffect, useState } from "react";
import styleForm from '@/styles/form-style.module.css'
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";

interface Input {
    placeholderInput: string,
    value?: string,
    setValue?: ComponentState
    disable?: boolean,
    name?: string,
    classNameInp: string,
    classNameCnt?: string,
    animation?: boolean,
    typeInp: string,
    params: HtmlProps
}

const Input: FC<Input> = ({placeholderInput, typeInp, setValue, classNameCnt, value, disable=false, name, classNameInp, animation=true, params}) => {
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
            <input {...params} placeholder={!animation ? placeholderValue : ''} autoComplete="off" name={name} className={classNameInp} onChange={el => setValue(el.target.value)} type={typeInp} value={value} disabled={disable}/>
        </label>
    )
}

export default Input