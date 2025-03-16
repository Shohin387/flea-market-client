type TypeCategory = 'Одежда' | 'Цифровая техника' | 'Бытовая Техника'
type TypeCoordinate = {lat: number, lng: number}

export interface CardsData {
    id: number,
    userId: number,
    nameProduct: string,
    imgSrc: string | null,
    discription: string,
    price: number,
    adress: string 
    category: TypeCategory,
    coordinate: TypeCoordinate
}