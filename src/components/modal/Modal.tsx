import React, { FC } from "react";
import { useStateContext, useDispatchContext } from "../../reducer";

// Types:
interface ModalProps {
	time: number | null;
}

// Modal component:
const Modal: FC<ModalProps> = ({ time }) => {
	const state = useStateContext();
	const dispatch = useDispatchContext();

	// Go to next level. If level 3, go to leaderboard
	const handleNextLevel = () => {
		if (state.level === null) return;
		if (state.level !== 3) {
			dispatch({ type: "SET_NEXT_LEVEL", payload: state.level + 1 });
		} else {
			dispatch({ type: "SET_GAME_OVER" });
		}
	};

	return (
		<div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50">
			<div className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white py-5 shadow-lg sm:w-1/3">
				<div className="flex h-full flex-col items-center justify-center">
					<div className="text-2xl font-bold text-blue-500">
						Level {state.level}:
					</div>
					<div className="text-lg text-blue-500">
						Time complete:
						<span className="font-bold text-red-600"> {time}s</span>
					</div>
					<button
						className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-red-600"
						onClick={handleNextLevel}
					>
						{state.level !== 3 ? "Next Level" : "View Leaderboard"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
