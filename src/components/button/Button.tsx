import React, { FC } from "react";

// Types
interface ButtonProps {
	name: number;
	level: number | null;
	handleClick: () => void;
}

// LevelButton component:
// - sets level
const LevelButton: FC<ButtonProps> = ({ name, level, handleClick }) => {
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
