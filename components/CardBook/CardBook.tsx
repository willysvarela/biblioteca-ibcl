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

	const handleClickBook = () => {};

	return (
		<Link href={`/livro/${book.id}`} passHref>
			<a className={"flex flex-col cursor-pointer" + className}>
				<BookImage src={book.imageUrl} alt={book.title} />
				<span className="text-xs hover:color-primary" style={{ width: "110px" }}>
					{titleSummary}
				</span>
			</a>
		</Link>
	);
};

export default CardBook;
