import React, { FC } from "react";

interface PickerButtonProps {
	src: string;
	char: string;
}

const PickerButton: FC<PickerButtonProps> = ({ src, char }) => {
	return (
		<li>
			<button className="flex w-full cursor-pointer items-center gap-1 overflow-hidden rounded-md bg-white hover:shadow-md">
				<img src={src} alt={char} className="h-9" />
				<span className="flex-grow text-lg ">{char}</span>
			</button>
		</li>
	);
};

export default PickerButton;
