import React, { FC } from 'react'
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
    className?: string;
}

const SearchInput: FC<SearchInputProps> = ({className}) => {
    return (
        <div className={"form-control " + className}>
            <label className="input-group">
                <span><FiSearch /></span>
                <input type="text" placeholder="Digite o nome do livro aqui" className="input input-bordered" />
            </label>
        </div>
    )
}

export default SearchInput;
