import React, { FC, useState, useEffect } from "react";
import Head from "../components/Head/Head";
import PropTypes from "prop-types";
import SearchInput from "../components/SearchInput/SearchInput";
import { Book } from "../interfaces/interfaces";
import { Books } from "../utils/Books.mock";
import { GetStaticProps, NextPage } from "next";
import CardBook from "../components/CardBook/CardBook";

interface HomePageProps {
    books: Book[];
}

const HomePage: NextPage<HomePageProps> = ({ books }) => {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

    useEffect(() => {
        setFilteredBooks(books);
    }, [books]);

    const handleSearch = (value: string) => {
        console.log({ value });
        const filtered = books.filter((book) => book.title.toUpperCase().includes(value.toUpperCase()));
        setFilteredBooks(filtered);
    };

    return (
        <div>
            <Head />
            <main>
                <div className="flex justify-center">
                    <SearchInput onChangeValue={handleSearch} />
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {filteredBooks.map((book) => {
                        return (
                            <div key={book.id} className="ml-2 my-4">
                                <CardBook book={book} />
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};

HomePage.propTypes = {};

export const getStaticProps: GetStaticProps = async (context) => {
    const books: Book[] = Books;
    return {
        props: { books },
    };
};

export default HomePage;
