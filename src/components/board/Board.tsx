import React, {
	FC,
	useState,
	useRef,
	useEffect,
	useLayoutEffect,
	PropsWithChildren,
} from "react";
import { useStateContext } from "../../reducer";

// Components:
import Picker from "../picker/Picker";
import StartButton from "../startbutton/StartButton";

// Util functions:
import { usePositionOffset, updateCoordinatesOnResize } from "../../util";

// Types:
import { Data, Coordinates, Position } from "../../types";

let coordinates: Coordinates = [];

const useDataSort = (data: Data[], level: number): string => {
	const d = data[level - 1];
	coordinates = [
		{ char: d.waldo[0], coordinate: [d.waldo[1], d.waldo[2]] },
		{ char: d.odlaw[0], coordinate: [d.odlaw[1], d.odlaw[2]] },
		{ char: d.wizard[0], coordinate: [d.wizard[1], d.wizard[2]] },
	];
	return d.img;
};

// Board component:
const Board: FC<PropsWithChildren> = ({ children }) => {
	// State:
	const state = useStateContext();
	// Sets modal location to click position
	const [clickPos, setClickPos] = useState<Position>({ x: 0, y: 0 });
	// Toggles display for Picker modal
	const [view, setView] = useState<boolean>(false);

	// Image element
	const imageRef = useRef<HTMLImageElement>(null);

	// Get image source before paint
	useLayoutEffect(() => {
		if (state.level !== null) {
			const src = useDataSort(state.coordinatesData, state.level);
			if (imageRef.current !== null) {
				imageRef.current.src = src;
			}
		}
	}, [state.level]);

	// Holds last width before resize
	const widthRef = useRef<number | null>(null);

	// Calculate coordinates on playing = true
	useEffect(() => {
		if (state.playing === true) {
			coordinates = updateCoordinatesOnResize(imageRef, 1000, coordinates);
			if (imageRef.current !== null) {
				const width = imageRef.current.offsetWidth;
				widthRef.current = width;
			}
		}
	}, [state.playing]);

	const onResize = () => {
		if (state.playing === true) {
			coordinates = updateCoordinatesOnResize(imageRef, widthRef, coordinates);
			if (imageRef.current !== null) {
				const width: number = imageRef.current.offsetWidth;
				widthRef.current = width;
			}
		}
	};

	// Recalculate coordinates on window resize
	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	// When click on image => Get coordinates, calculate offset, and set state
	const handleClick = (e: React.MouseEvent) => {
		if (imageRef.current !== null) {
			const rect = imageRef.current.getBoundingClientRect();
			const localX = e.clientX - rect.left;
			const localY = e.clientY - rect.top;
			const position = usePositionOffset(localX, localY, imageRef);
			setClickPos(position);
			setView(!view);
		}
	};

	return (
		<div
			data-testid="board"
			className="relative z-10 mx-2 overflow-hidden rounded-md border bg-white"
		>
			<img
				alt=""
				src=""
				onClick={handleClick}
				id="img"
				ref={imageRef}
				className={state.playing === false ? "blur-sm" : undefined}
			/>
			{children}
			<StartButton />
			<Picker
				clickPos={clickPos}
				view={view}
				setView={setView}
				coordinates={coordinates}
			/>
		</div>
	);
};

export default Board;
