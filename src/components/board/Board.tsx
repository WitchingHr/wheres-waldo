import React, { FC, useState, useRef, RefObject } from "react";

// Components and Assets
import Picker from "../picker/Picker";
import picture from "../../assets/1.jpg";

// Types
export interface Position {
	x: number;
	y: number;
}

// Offsets modal position if click is near edge of container
const usePositionOffset = (
	x: number,
	y: number,
	ref: RefObject<HTMLImageElement>
): Position => {
	if (ref.current !== null) {
    // Get height and width of image
		const width: number = ref.current.offsetWidth;
		const height: number = ref.current.offsetHeight;
    // Update x or y if past breakpoint
		if (y >= height - 126) {
			y = height - 129;
		}
		if (x >= width - 160) {
			x = width - 170;
		}
	}
	return { x: x, y: y };
};

// Filler Data for Development
const locations = [
	{ char: "Waldo", location: [656, 267] },
	{ char: "Odlaw", location: [113, 254] },
	{ char: "Wizard", location: [286, 254] },
];

// Board component:
// - wraps the level image and the character Picker modal
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
		// console.log(localX, localY); // Delete me...................................
		const position = usePositionOffset(localX, localY, imageRef);
		setClickPos(position);
		setView(!view);
	};

	return (
		<div className="relative mx-2 overflow-hidden rounded-md border">
			<img alt="" src={picture} onClick={handleClick} id="img" ref={imageRef} />
			<Picker
				clickPos={clickPos}
				view={view}
				setView={setView}
				locations={locations}
			/>
		</div>
	);
};

export default Board;
