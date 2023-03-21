import React, { FC, useState, useRef, RefObject, useEffect } from "react";

// Components and Assets
import Picker from "../picker/Picker";
import picture from "../../assets/1.jpg";

// Types
export interface Position {
	x: number;
	y: number;
}

// Filler Data for Development
let locations = [
	{ char: "Waldo", location: [625, 256] },
	{ char: "Odlaw", location: [109, 242] },
	{ char: "Wizard", location: [273, 242] },
];

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

// Calculate scale factor by dividing image width with prev width | number
const calcScaleFactor = (
	ref1: RefObject<HTMLImageElement>,
	ref2: RefObject<number> | number
): number => {
	if (typeof ref2 === "object") {
		if (ref1.current !== null && ref2.current !== null) {
			const width: number = ref1.current.offsetWidth;
			return width / ref2.current;
		}
	} else {
		if (ref1.current !== null) {
			const width: number = ref1.current.offsetWidth;
			return width / ref2;
		}
	}
	throw new Error("Bad ref");
};

// Calculates new coordinates by multiplying coordinates by scale factor
const calcNewLocations = (location: number[], scaleFactor: number) => {
	const [x, y] = location;
	return [Math.trunc(x * scaleFactor), Math.trunc(y * scaleFactor)];
};

// Calculate coordinates based on image width
const updateCoordinatesOnResize = (
	ref1: RefObject<HTMLImageElement>,
	ref2: RefObject<number> | number
) => {
	if (ref1 !== null) {
		const scaleFactor = calcScaleFactor(ref1, ref2);
		locations = locations.map((char) => {
			const xy = char.location;
			return { ...char, location: calcNewLocations(xy, scaleFactor) };
		});
	}
	// console.log(locations); // Delete me..............................................
};

// Board component:
// wraps the level image and the character Picker modal
const Board: FC = () => {
	// State:
	// Sets modal location to click position
	const [clickPos, setClickPos] = useState<Position>({ x: 0, y: 0 });
	// Toggles display for Picker modal
	const [view, setView] = useState<boolean>(false);

	// Image element
	const imageRef = useRef<HTMLImageElement>(null);

	// Holds last width before resize
	const widthRef = useRef<number | null>(null);

	// On render, calculate location coordinates based on image width
	useEffect(() => {
		setTimeout(() => {
			updateCoordinatesOnResize(imageRef, 1000);
			if (imageRef.current !== null) {
				const width: number = imageRef.current.offsetWidth;
				widthRef.current = width;
			}
		}, 1000);
	}, []);

	// Recalculate coordinates on window resize
	useEffect(() => {
		window.addEventListener("resize", () => {
			updateCoordinatesOnResize(imageRef, widthRef);
			if (imageRef.current !== null) {
				const width: number = imageRef.current.offsetWidth;
				widthRef.current = width;
			}
		});
		return () =>
			window.removeEventListener("resize", () =>
				updateCoordinatesOnResize(imageRef, widthRef)
			);
	}, []);

	// When click on image => Get coordinates, calculate offset, and set state
	const handleClick = (e: React.MouseEvent) => {
		const localX = e.clientX;
		const localY = e.clientY - 30 + window.scrollY;
		console.log(localX, localY); // Delete me...................................
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
