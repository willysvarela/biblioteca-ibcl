import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { Book } from '../../interfaces/interfaces';

interface CardBookProps {
    book: Book,
    className?: string
}

const CardBook: FC<CardBookProps> = ({book, className}) => {
    const [titleSummary, setTitleSummary] = React.useState('');

    useEffect(() => {
        const MAX_CHARS = 28;
        setTitleSummary(book.title.substring(0, MAX_CHARS) + '...');
    }, [book]);
    return (
        <div className={"flex flex-col " + className}>
            <Image className="rounded-lg" src={book.imageUrl} alt="" layout="fixed" width="110" height="189"/>
            <span className="text-xs" style={{width: '110px'}}>{titleSummary}</span>
        </div>
    )
}

export default CardBook;