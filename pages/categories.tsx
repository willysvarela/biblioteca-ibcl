import type { GetStaticProps, NextPage } from "next";
import Head from "../components/Head/Head";
import { useRouter } from "next/router";
import { Book } from "./../interfaces/interfaces";
import SearchInput from "../components/SearchInput/SearchInput";
import HorizontalListBooks from "../components/HorizontalListBooks/HorizontalListBooks";
import { Books } from "../utils/Books.mock";

interface CategoriesProps {
    books: Book[];
}

const Categories: NextPage<CategoriesProps> = ({ books }) => {
    const router = useRouter();

    return (
        <div>
            <Head />
            <main className="ml-2">
                <div className="flex justify-center">
                    <SearchInput />
                </div>
                <div>
                    <HorizontalListBooks books={books} title="Adolescentes" />
                    <HorizontalListBooks
                        books={books}
                        title="Vida Espiritual"
                    />
                </div>
                <div className="flex justify-center my-5">
                    <span
                        className="font-bold underline"
                        onClick={() => router.push("/livros")}
                    >
                        Livros de A a Z
                    </span>
                </div>
            </main>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const books: Book[] = Books;
    return {
        props: { books },
    };
};

export default Categories;
