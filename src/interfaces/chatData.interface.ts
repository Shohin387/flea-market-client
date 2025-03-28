export interface ChatI {
	id: number,
	idSender: number,
	idRecipient: number
	photoOfInterlocutor?: string,
	get nameOfInterlocutor(): string
}