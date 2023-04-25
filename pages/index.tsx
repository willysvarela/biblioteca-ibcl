import React, { useState, useEffect, useRef } from "react";
import Head from "../components/Head/Head";
import SearchInput from "../components/SearchInput/SearchInput";
import { Book, BookGQL } from "../interfaces/interfaces";
import { GetStaticProps, NextPage } from "next";
import CardBook from "../components/CardBook/CardBook";
import { useQuery } from "@apollo/client";
import Button from "../components/Button/Button";
import { GET_BOOKS_PAGED_QRY } from "../services/api/queries/books";
import { bookGQLToBook } from "../interfaces/resolvers";

interface HomePageProps {
    books: Book[];
}

const HomePage: NextPage<HomePageProps> = () => {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [loadedBooks, setLoadedBooks] = useState<Book[]>([]);
    const [page, setPage] = useState<number>(1);
    const [scroll, setScroll] = useState(0);
    const ref = useRef(null);
    const { data, loading } = useQuery(GET_BOOKS_PAGED_QRY, {
        variables: { page: page },
    });
    const [isMounted, setMounted] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const books: Book[] = !data
            ? []
            : data.books.data.map((book: BookGQL): Book => bookGQLToBook(book));
        setLoadedBooks((old) => [...old, ...books]);
    }, [data]);

    useEffect(() => {
        setFilteredBooks(loadedBooks);
    }, [loadedBooks]);

    const onRefresh = () => {
        setPage((page) => page + 1);
    };

    useEffect(() => {
        const filtered = loadedBooks.filter((book) =>
            book.title.toUpperCase().includes(searchValue.toUpperCase())
        );
        setFilteredBooks(filtered);
    }, [searchValue, loadedBooks]);

    useEffect(() => {
        setMounted(true);
        const onScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    useEffect(() => {
        console.log({ ref: ref.current, scroll });
    }, [scroll]);

    if (!isMounted) {
        return null;
    }

    return (
        <div ref={ref}>
            <Head />
            <main>
                {scroll}
                <div className="flex justify-center">
                    <SearchInput
                        onChangeValue={(value: string) => setSearchValue(value)}
                    />
                </div>
                <div className="flex flex-wrap justify-evenly">
                    {filteredBooks.map((book) => {
                        return (
                            <div
                                key={`${book.id}-${book.title}`}
                                className="ml-2 my-4"
                            >
                                <CardBook book={book} />
                            </div>
                        );
                    })}
                </div>
            </main>
            <Button onClick={onRefresh} name="Refresh" />
            {loading && <span>Loading...</span>}
        </div>
    );
};

HomePage.propTypes = {};

export default HomePage;
