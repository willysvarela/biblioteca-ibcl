import React, { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import { useRouter } from "next/router";

import { Book, BookGQL } from "../../interfaces/interfaces";
import { Books } from "../../utils/Books.mock";
import BookImage from "../../components/BookImage/BookImage";
import { createWhatsappLink } from "../../utils/whatsapp";
import client from "../../services/api/apollo";
import { GET_BOOKS_QRY, GET_BOOK_QRY } from "../../services/api/queries/books";
import { bookGQLToBook } from "../../interfaces/resolvers";

interface LivroProps {
    book: Book;
}

const Livro: FC<LivroProps> = ({ book }) => {
    const router = useRouter();
    console.log({ returned: book });
    const borrowBook = (book: Book) => {
        const link = createWhatsappLink(book);
        console.log({ location: window.location });
        window.open(link, "_blank");
    };

    return (
        <div className="container mx-5">
            <div className="flex flex-row">
                <BookImage src={book.imageUrl} alt={book.title} />
                <div className=" flex flex-col justify-between">
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
    const { data } = await client.query({
        query: GET_BOOK_QRY,
        variables: { bookId: id },
    });
    console.log({ book: data.book.data });
    const bookGQL = !data ? null : data.book.data;
    const book = bookGQLToBook(bookGQL);

    return { props: { book } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({ query: GET_BOOKS_QRY });

    const books = !data ? [] : data.books.data;
    const paths = books.map((book: BookGQL) => ({
        params: { id: book.id.toString() },
    }));
    return { paths, fallback: false };
};

export default Livro;
