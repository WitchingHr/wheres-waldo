import React, {
	FC,
	Dispatch,
	SetStateAction,
	useContext,
	useRef,
	RefObject,
} from "react";

// Pics
import waldoImg from "../../assets/Waldo.jpg";
import odlawImg from "../../assets/Odlaw.jpg";
import wizardImg from "../../assets/Wizard.jpg";

const usePic = (char: string) => {
	if (char === "Waldo") return waldoImg;
	if (char === "Odlaw") return odlawImg;
	if (char === "Wizard") return wizardImg;
};

// Types
import { Position } from "../board/Board";
interface PickerButtonProps {
	char: string;
	location: number[];
	clickPos: Position;
	setView: Dispatch<SetStateAction<boolean>>;
}

// Get context
import { ObjectiveContext } from "../../App";
const useObjectiveContext = () => {
	const context = useContext(ObjectiveContext);
	if (context === null)
		throw new Error("Expected to have ObjectiveContext provided");
	return context;
};

// On correct => animate button, close modal
const useCorrect = (
	ref: RefObject<HTMLButtonElement>,
	fn: Dispatch<SetStateAction<boolean>>
) => {
	if (ref.current !== null) {
		ref.current.classList.toggle("animate-correct");
		setTimeout(() => {
			if (ref.current !== null) {
				ref.current.classList.toggle("animate-correct");
				fn(false);
			}
		}, 500);
	}
};

// On incorrect => animate button
const useIncorrect = (ref: RefObject<HTMLButtonElement>) => {
	if (ref.current !== null) {
		ref.current.classList.toggle("animate-incorrect");
		setTimeout(() => {
			if (ref.current !== null) {
				ref.current.classList.toggle("animate-incorrect");
			}
		}, 600);
	}
};

// PickerButton component:
// - button containing image and name of character,
// - stateful logic for selecting character
const PickerButton: FC<PickerButtonProps> = ({
	char,
	location,
	clickPos,
	setView,
}) => {
	// Get objective from context
	const { objective, setObjective } = useObjectiveContext();

	// Get image src
	const src = usePic(char);

	const buttonRef = useRef<HTMLButtonElement>(null);

	// Click position
	const { x, y } = clickPos;

	const handleClick = () => {
		// Character coordinates
		const [xChar, yChar] = location;

		// If correct, update objective state, animate button and close modal
		if (Math.abs(xChar - x) < 30 && Math.abs(yChar - y) < 30) {
			setObjective({
				...objective,
				[char]: true,
			});
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
