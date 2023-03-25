import React, {
	FC,
	useState,
	useRef,
	useEffect,
	useLayoutEffect,
	Dispatch,
	SetStateAction,
} from "react";

// Components:
import Picker from "../picker/Picker";
import StartButton from "../startbutton/StartButton";

// Functions:
import { usePositionOffset, updateCoordinatesOnResize } from "../../util";

// Types:
import { Data, Coordinates, Position, Objective } from "../../types";
import Modal from "../modal/Modal";

interface BoardProps {
	data: Data[];
	level: number | null;
	setLevel: Dispatch<SetStateAction<number | null>>;
	objective: Objective;
	setObjective: Dispatch<SetStateAction<Objective>>;
	time: number | null;
	playing: boolean;
	setPlaying: Dispatch<SetStateAction<boolean>>;
	hideButton: boolean;
	setHideButton: Dispatch<SetStateAction<boolean>>;
	text: string | number;
	setText: Dispatch<SetStateAction<string | number>>;
	setViewLeader: Dispatch<SetStateAction<boolean>>;
}

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
// wraps the level image and the character Picker modal
const Board: FC<BoardProps> = ({
	data,
	level,
	setLevel,
	objective,
	setObjective,
	time,
	playing,
	setPlaying,
	hideButton,
	setHideButton,
	text,
	setText,
	setViewLeader
}) => {
	// State:
	// Sets modal location to click position
	const [clickPos, setClickPos] = useState<Position>({ x: 0, y: 0 });
	// Toggles display for Picker modal
	const [view, setView] = useState<boolean>(false);

	// Image element
	const imageRef = useRef<HTMLImageElement>(null);

	// Get image source before paint
	useLayoutEffect(() => {
		if (level !== null) {
			const src = useDataSort(data, level);
			if (imageRef.current !== null) {
				imageRef.current.src = src;
			}
		}
	}, [level]);

	// Holds last width before resize
	const widthRef = useRef<number | null>(null);

	// Calculate coordinates on playing = true
	useEffect(() => {
		if (playing === true) {
			coordinates = updateCoordinatesOnResize(imageRef, 1000, coordinates);
			if (imageRef.current !== null) {
				const width = imageRef.current.offsetWidth;
				widthRef.current = width;
			}
		}
	}, [playing]);

	const onResize = () => {
		if (playing === true) {
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
		<div className="relative z-10 mx-2 overflow-hidden rounded-md border bg-white">
			<img
				alt=""
				src=""
				onClick={handleClick}
				id="img"
				ref={imageRef}
				className={playing === false ? "blur-sm" : undefined}
			/>
			<Picker
				clickPos={clickPos}
				view={view}
				setView={setView}
				coordinates={coordinates}
			/>
			<StartButton
				playing={playing}
				setPlaying={setPlaying}
				hideButton={hideButton}
				setHideButton={setHideButton}
				text={text}
				setText={setText}
			/>
			{Object.values(objective).every((val) => val === true) && (
				<Modal
					level={level}
					setLevel={setLevel}
					setObjective={setObjective}
					time={time}
					setPlaying={setPlaying}
					setHideButton={setHideButton}
					setText={setText}
					setViewLeader={setViewLeader}
				/>
			)}
		</div>
	);
};

export default Board;
