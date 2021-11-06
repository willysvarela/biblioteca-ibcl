import React, { FC } from "react";
import { Book } from "../../interfaces/interfaces";
import CardBook from "../CardBook/CardBook";

interface HorizontalListBooksProps {
    books: Book[];
    title: string;
}

const HorizontalListBooks: FC<HorizontalListBooksProps> = ({books, title}) => {
	return (
		<div className="mt-5">
			<span className="font-bold">{title}</span>
			<div className="flex flex-row overflow-auto">
				{books.map((book) => (
					<CardBook className="mr-5" key={book.title} book={book} />
				))}
			</div>
		</div>
	);
};

export default HorizontalListBooks;
