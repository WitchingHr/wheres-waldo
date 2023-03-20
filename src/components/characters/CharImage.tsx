import React, { FC } from "react";

// Types
interface CharImageProps {
	src: string;
	char: boolean;
}

// CharImage component:
// - will show low opacity image for character until he is found
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
