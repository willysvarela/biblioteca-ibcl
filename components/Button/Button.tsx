import React, { FC } from 'react'

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLAnchorElement>,
    name: string
}

const Button: FC<ButtonProps> = ({ onClick, name }) => {
    return (
        <a className="btn btn-primary" onClick={onClick} >{name}</a>
    );
};

export default Button;