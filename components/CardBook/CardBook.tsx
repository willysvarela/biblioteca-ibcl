import React, { FC, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Book } from "../../interfaces/interfaces";
import BookImage from "../BookImage/BookImage";

interface CardBookProps {
	book: Book;
	className?: string;
}

const CardBook: FC<CardBookProps> = ({ book, className }) => {
	const [titleSummary, setTitleSummary] = React.useState("");

	useEffect(() => {
		const MAX_CHARS = 28;
		setTitleSummary(book.title.substring(0, MAX_CHARS) + "...");
	}, [book]);

	const handleClickBook = () => { };

	return (
		<Link className={"flex flex-col cursor-pointer" + className} href={`/livro/${book.id}`} passHref>
			<BookImage src={book.imageUrl} alt={book.title} />
			<span className="text-xs hover:color-primary" style={{ width: "110px" }}>
				{titleSummary}
			</span>
		</Link>
	);
};

export default CardBook;
