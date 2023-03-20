import React, { FC, useState } from "react";

// Components
import PickerButton from "./PickerButton";

// Pics
import Waldo from "../../assets/Waldo.jpg";
import Odlaw from "../../assets/Odlaw.jpg";
import Wizard from "../../assets/Wizard.jpg";

// Types
interface PickerProps {
	clickPos: Position;
	view: boolean;
}

interface Position {
	x: number;
	y: number;
}

const Picker: FC<PickerProps> = ({ clickPos, view }) => {
	const { x, y } = clickPos;

	return (
		<div
			className={
				(view ? "block " : "hidden ") +
				"animate-open overflow-hidden absolute mx-2 w-40 rounded-md border bg-slate-100 p-1 shadow-xl"
			}
			style={{ top: `${y}px`, left: `${x}px` }}
		>
			<ul className="flex flex-col gap-1">
				<PickerButton src={Waldo} char="Waldo" />
				<PickerButton src={Odlaw} char="Odlaw" />
				<PickerButton src={Wizard} char="Wizard" />
			</ul>
		</div>
	);
};

export default Picker;
