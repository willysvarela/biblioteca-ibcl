import React, { FC } from "react";
import Image from "next/image";

interface BookImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const DEFAULT_IMAGE_SRC = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.depositphotos.com%2Fvector-images%2Flivro.html&psig=AOvVaw2GQVAfaCQwvDCbgKlzDirw&ust=1637188651717000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMi08Zb5nfQCFQAAAAAdAAAAABAD';

const BookImage: FC<BookImageProps> = ({ src, alt, className }) => {
	return (
		<Image
			className={`rounded-lg ${className}`}
			src={src || DEFAULT_IMAGE_SRC}
			alt={alt}
			layout="fixed"
			width="110"
			height="189"
		/>
	);
};

export default BookImage;