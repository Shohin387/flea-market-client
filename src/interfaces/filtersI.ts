export interface FiltersI {
	state: 'любое' | 'новое' | 'Б/У',
	salesmen: 'все' | 'Частные лица' | 'Компании',
	comnMethod: 'Все' | 'Звонки' | 'Сообщения',
	from: number,
	to: number
}
