import { Book } from "../interfaces/interfaces";

export const createWhatsappLink = (book: Book, url: string) => { 
	const message = `${process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE}%0a ${book.title} - ID: ${book.id}%0a${window.location}`;
	const link = `${process.env.NEXT_PUBLIC_WHATSAPP_URL}${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;
	return link;
};