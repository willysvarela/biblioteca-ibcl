import React, { FC, useState, useEffect } from 'react'
import { FiSearch } from "react-icons/fi";

interface SearchInputProps {
    className?: string;
    onChangeValue?: any;
}

const SearchInput: FC<SearchInputProps> = ({className, onChangeValue}) => {
    const [value, setValue] = useState("");

    const handleChange = (e: any) => {
        setValue(e.target.value);
        onChangeValue(e.target.value);
    }

    return (
        <div className={"form-control " + className}>
            <label className="input-group">
                <span><FiSearch /></span>
                <input type="text" placeholder="Digite o nome do livro aqui" className="input input-bordered" onChange={handleChange} />
            </label>
        </div>
    )
}

export default SearchInput;
