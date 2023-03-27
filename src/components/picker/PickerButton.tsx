import React, { FC, Dispatch, SetStateAction, useRef } from "react";

// Functions
import { useCorrect, useIncorrect, usePic } from "../../util";
import { useStateContext, useDispatchContext } from "../../reducer";

// Types
import { Position } from "../../types";

interface PickerButtonProps {
	char: string;
	coordinate: number[];
	clickPos: Position;
	setView: Dispatch<SetStateAction<boolean>>;
}

// PickerButton component:
const PickerButton: FC<PickerButtonProps> = ({
	char,
	coordinate,
	clickPos,
	setView,
}) => {
	// Get objective from context
	const state = useStateContext();
	const dispatch = useDispatchContext();

	// Get image src
	const src = usePic(char);

	const buttonRef = useRef<HTMLButtonElement>(null);

	// Click position
	const { x, y } = clickPos;

	// Select character from picker modal, compare coordinates
	const handleClick = () => {
		// Character coordinates
		const [xChar, yChar] = coordinate;
		// If correct, update objective state, animate button and close modal
		if (Math.abs(xChar - x) < 30 && Math.abs(yChar - y) < 30) {
			const next = { ...state.objective, [char]: true };
			dispatch({ type: "SET_OBJECTIVE", payload: next });
			useCorrect(buttonRef, setView);
		} else {
			// If incorrect, animate button
			useIncorrect(buttonRef);
		}
	};

	return (
		<li>
			<button
				className="flex w-full cursor-pointer items-center gap-1 overflow-hidden rounded-md bg-white hover:shadow-md"
				onClick={handleClick}
				ref={buttonRef}
			>
				<img src={src} alt={char} className="h-9" />
				<span className="flex-grow text-lg ">{char}</span>
			</button>
		</li>
	);
};

export default PickerButton;
