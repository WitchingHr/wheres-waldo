import React, { Dispatch, FC, SetStateAction } from "react";

// Types
import { Objective } from "../../types";
interface ButtonProps {
	name: number;
	level: number | null;
	setLevel: Dispatch<SetStateAction<number | null>>;
	setObjective: Dispatch<SetStateAction<Objective>>;
	setPlaying: Dispatch<SetStateAction<boolean>>;
	setHideButton: Dispatch<SetStateAction<boolean>>;
	setText: Dispatch<SetStateAction<string | number>>;
	setViewLeader: Dispatch<SetStateAction<boolean>>;
}

// LevelButton component:
const LevelButton: FC<ButtonProps> = ({
	name,
	level,
	setLevel,
	setObjective,
	setPlaying,
	setHideButton,
	setText,
	setViewLeader,
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
		setText("Start");
		setViewLeader(false);
	};

	return (
		<>
			{level !== name ? (
				<button
					onClick={handleClick}
					className="border px-2 text-blue-500 transition duration-200 hover:bg-slate-200"
				>
					{name}
				</button>
			) : (
				<button
					onClick={handleClick}
					disabled
					className="border px-2 font-bold text-red-600"
				>
					{name}
				</button>
			)}
		</>
	);
};

export default LevelButton;
