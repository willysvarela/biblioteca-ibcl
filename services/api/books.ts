import apolloClient from "./apollo";
import { gql } from "@apollo/client";
import { BookGQL, Book } from "../../interfaces/interfaces";

const booksQuery = gql`
    query books {
        books {
            data {
                id
                attributes {
                    titulo
                    descricao
                    capa_url
                }
            }
        }
    }
`;

export const getBooks = async (page: number) => {
    const client = apolloClient;

    const { data } = await client.query({
        query: booksQuery,
        variables: {
            page: 2,
        },
    });

    const books: Book[] = data.books.data.map(
        (book: BookGQL): Book => ({
            id: book.id,
            title: book.attributes.titulo,
            description: book.attributes.descricao,
            imageUrl: book.attributes.capa_url,
        })
    );
    return books;
};
