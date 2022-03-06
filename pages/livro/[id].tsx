import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

import { Book } from "../../interfaces/interfaces";
import { Books } from "../../utils/Books.mock";
import BookImage from "../../components/BookImage/BookImage";
import { createWhatsappLink } from "../../utils/whatsapp";

interface LivroProps {
    book: Book;
}

const Livro: FC<LivroProps> = ({ book }) => {
    const router = useRouter();

    const borrowBook = (book: Book) => {
        const link = createWhatsappLink(book);
        console.log({ location: window.location });
        window.open(link, "_blank");
    };

    return (
        <div className="container">
            <div className="flex flex-row">
                <BookImage src={book.imageUrl} alt={book.title} />
                <div className="ml-5 flex flex-col justify-between">
                    <h1 className="text-lg font-bold ">Livro {book.title}</h1>
                    <button
                        className="btn mt-2"
                        onClick={() => borrowBook(book)}
                    >
                        Alugar Livro
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <span className="font-bold">DESCRIÇÃO:</span>
                <p>{book.description}</p>
            </div>
        </div>
    );
};

interface IParams extends ParsedUrlQuery {
    id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as IParams;
    const books = Books;

    const book: Book = books.find((book) => book.id === Number(id)) as Book;

    return { props: { book } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const books = Books;
    const paths = books.map((book) => ({
        params: { id: book.id.toString() },
    }));
    return { paths, fallback: false };
};

export default Livro;
