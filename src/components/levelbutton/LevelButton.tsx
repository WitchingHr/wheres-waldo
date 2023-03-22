import React, { Dispatch, FC, SetStateAction } from "react";

// Types
import { Objective } from "../../App";
interface ButtonProps {
	name: number;
	level: number | null;
	setLevel: Dispatch<SetStateAction<number | null>>;
	setObjective: Dispatch<SetStateAction<Objective>>;
	setPlaying: Dispatch<SetStateAction<boolean>>;
	setHideButton: Dispatch<SetStateAction<boolean>>;
}

// LevelButton component:
const LevelButton: FC<ButtonProps> = ({
	name,
	level,
	setLevel,
	setObjective,
	setPlaying,
	setHideButton,
}) => {
	// Select level, reset objective state
	const handleClick = () => {
		setLevel(name);
		setObjective({
			Waldo: false,
			Odlaw: false,
			Wizard: false,
		});
		setPlaying(false);
		setHideButton(false);
	};

	return (
		<>
			{level !== name ? (
				<button onClick={handleClick} className="border px-2">
					{name}
				</button>
			) : (
				<button
					onClick={handleClick}
					disabled
					className="border bg-slate-300 px-2"
				>
					{name}
				</button>
			)}
		</>
	);
};

export default LevelButton;