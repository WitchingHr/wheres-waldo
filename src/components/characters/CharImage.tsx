import React, { FC } from "react";

interface CharImageProps {
	src: string;
	char: boolean;
}

const CharImage: FC<CharImageProps> = ({ src, char }) => {
	return (
		<img
			src={src}
			alt=""
			className={
				(char === false && "opacity-40 ") +
				"h-full cursor-pointer hover:opacity-100"
			}
		/>
	);
};

export default CharImage;
