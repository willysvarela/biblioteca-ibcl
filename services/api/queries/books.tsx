import { gql } from "@apollo/client";
export const GET_BOOKS_PAGED_QRY = gql`
    query books($page: Int) {
        books(pagination: { page: $page, pageSize: 20 }) {
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

export const GET_BOOKS_QRY = gql`
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

export const GET_BOOK_QRY = gql`
    query ($bookId: ID) {
        book(id: $bookId) {
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
