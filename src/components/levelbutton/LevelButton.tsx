import React, { FC } from "react";
import { useDispatchContext, useStateContext } from "../../reducer";

// Types
interface ButtonProps {
	name: number;
}

// LevelButton component:
const LevelButton: FC<ButtonProps> = ({ name }) => {
	const state = useStateContext();
	const dispatch = useDispatchContext();

	// Select level, reset objective state
	const handleClick = () => {
		dispatch({ type: "SET_LEVEL", payload: name });
	};

	return (
		<>
			{state.level !== name ? (
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
