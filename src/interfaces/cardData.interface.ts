type TypeCategory = 'Одежда' | 'Электроника' | 'Бытовая Техника' | 'Недвижимость' | 'Транспорт' | 'Работа' | 'Услуги'
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
    coordinate: TypeCoordinate,
    sold: boolean,
    state:  'новое' | 'Б/У',
	salesmen: 'Частные лица' | 'Компании',
	comnMethod: 'Все' | 'Звонки' | 'Сообщения'
}