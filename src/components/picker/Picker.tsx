import React, { Dispatch, FC, SetStateAction } from "react";

// Components
import PickerButton from "./PickerButton";

// Types
import { Position } from "../board/Board";
interface PickerProps {
	clickPos: Position;
	view: boolean;
	setView: Dispatch<SetStateAction<boolean>>;
	locations: { char: string; location: number[] }[];
}

// Picker component:
// contains buttons for each character for selecting your choice
const Picker: FC<PickerProps> = ({ clickPos, view, setView, locations }) => {
	const { x, y } = clickPos;

	return (
		<div
			className={
				(view ? "block " : "hidden ") +
				"absolute mx-2 w-40 animate-open overflow-hidden rounded-md border bg-slate-100 p-1 shadow-xl"
			}
			style={{ top: `${y}px`, left: `${x}px` }}
		>
			<ul className="flex flex-col gap-1">
				{locations.map((ele, i) => (
					<PickerButton
						key={i}
						char={ele.char}
						location={ele.location}
						clickPos={clickPos}
						setView={setView}
					/>
				))}
			</ul>
		</div>
	);
};

export default Picker;
