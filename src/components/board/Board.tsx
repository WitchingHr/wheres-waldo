import React, { FC, useState, useRef, RefObject } from "react";

// Components and Assets
import Picker from "../picker/Picker";
import picture from "../../assets/1.jpg";

// Type
interface Position {
	x: number;
	y: number;
}

// Offsets modal position if click is near edge of container
const usePositionOffset = (x: number, y: number, ref: RefObject<HTMLImageElement>): Position => {
	if (ref.current !== null) {
		const width: number = ref.current.offsetWidth;
		const height: number = ref.current.offsetHeight;
		if (y >= height - 126) {
			y = height - 129;
		}
		if (x >= width - 160) {
			x = width - 170;
		}
	}
	return { x: x, y: y };
};

// Board Component: Wraps the image and the character Picker modal
const Board: FC = () => {
	// Sets modal location to click position
	const [clickPos, setClickPos] = useState<Position>({ x: 0, y: 0 });
	// Toggles display for Picker modal
	const [view, setView] = useState<boolean>(false);

	const imageRef = useRef<HTMLImageElement>(null);

	// When click on image => Get coordinates, calculate offset, and set state
	const handleClick = (e: React.MouseEvent) => {
		const localX = e.clientX;
		const localY = e.clientY - 30;
		const position = usePositionOffset(localX, localY, imageRef);
		setClickPos(position);
		setView(!view);
	};

	return (
		<div className="relative mx-2 overflow-hidden rounded-md border">
			<img alt="" src={picture} onClick={handleClick} id="img" ref={imageRef} />
			<Picker clickPos={clickPos} view={view} />
		</div>
	);
};

export default Board;
