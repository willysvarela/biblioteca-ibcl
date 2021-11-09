import React, { FC } from "react";
import Image from "next/image";

interface BookImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const BookImage: FC<BookImageProps> = ({ src, alt, className }) => {
	return (
		<Image
			className={`rounded-lg ${className}`}
			src={src}
			alt={alt}
			layout="fixed"
			width="110"
			height="189"
		/>
	);
};

export default BookImage;