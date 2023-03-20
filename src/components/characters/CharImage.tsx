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
				"h-full " + (char === false && "opacity-40")
			}
		/>
	);
};

export default CharImage;
