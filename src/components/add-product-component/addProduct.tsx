'use client'

import { useState, FC, useRef, JSX,  RefObject } from "react"
import styleCategory from "../../styles/add-product.module.css"
import Image from "next/image"

const CategoryProduct: FC = (): JSX.Element => {
    const [pathFile, setPathFile] = useState<File | null>()
    const selectInputRef = useRef<HTMLInputElement>(null)
    const activationSelected = (el: RefObject<HTMLInputElement | null>) => {
        el.current?.click()
    }

    return (
        <section className={styleCategory.addProduct}>
        <h1>Новое Объявление</h1>
        <h4>Выберите категорию</h4>
        <select className={styleCategory.selectCategory} >
            <option value="Бытовая техника">Бытовая техника</option>
            <option value="Цифровая техника">Цифровая техника</option>
            <option value="Одежда">Одежда</option>
        </select>

        <form className={styleCategory.formAddProduct} action="">
            <div className={styleCategory.selectFile} onClick={() => {activationSelected(selectInputRef)}}>Выберите файл</div>
            <input ref={selectInputRef} type="file" style={{display: "none"}} accept="image/*"  onChange={(files) => {setPathFile(files.target.files?.[0])}} placeholder="Выберите фото" /> 
            
            <input className={styleCategory.InputDiscriptionProduct} type="text" placeholder="Название товара"/><br />
            <input className={styleCategory.InputDiscriptionProduct}  type="text" placeholder="Описание товара"/><br />
            <input className={styleCategory.InputDiscriptionProduct}  type="number" placeholder="Цена товара"/><br />
            <input className={styleCategory.InputDiscriptionProduct}  type="adres" placeholder="Ваш адрес"/> <br />
            <input className={styleCategory.btnForPublic} type="button" value="Опубликовать" />
        </form>

        <div className={styleCategory.blockForPhoto}>
            {
                pathFile 
                ? <><Image src={URL.createObjectURL(pathFile!)} alt="Your image" /><br /></>
                : <b>Здесь будут <br /> ваши фото</b>
            }
                
            </div>
        </section>
    )
}

export default CategoryProduct