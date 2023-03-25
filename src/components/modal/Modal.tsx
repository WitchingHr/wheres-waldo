import React, { Dispatch, FC, SetStateAction } from "react";

// Types:
import { Objective } from "../../types";
interface ModalProps {
	level: number | null;
	setLevel: Dispatch<SetStateAction<number | null>>;
	setObjective: Dispatch<SetStateAction<Objective>>;
	time: number | null;
	setPlaying: Dispatch<SetStateAction<boolean>>;
  setHideButton: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string | number>>;
  setViewLeader: Dispatch<SetStateAction<boolean>>;
}

// Modal component:
const Modal: FC<ModalProps> = ({
	level,
	setLevel,
	setObjective,
	time,
	setPlaying,
  setHideButton,
  setText,
  setViewLeader
}) => {
	const handleNextLevel = () => {
		if (level !== null) {
      if (level !== 3) {
        setLevel(level + 1);
      } else {
        setLevel(null);
        setViewLeader(true);
      }
      setObjective({ Waldo: false, Odlaw: false, Wizard: false });
      setPlaying(false);
      setHideButton(false);
      setText("Start");
		}
	};

	return (
		<div className="fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50">
			<div className="absolute top-1/2 left-1/2 w-1/2 py-5 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white shadow-lg sm:w-1/3">
				<div className="flex h-full flex-col items-center justify-center">
					<div className="text-2xl font-bold text-blue-500">Level {level}:</div>
					<div className="text-lg text-blue-500">
						Time complete:
						<span className="font-bold text-red-600"> {time}s</span>
					</div>
					<button
						className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-red-600 transition"
						onClick={handleNextLevel}
					>
						{level !== 3 ? "Next Level" : "View Leaderboard"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
