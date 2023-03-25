import React, { Dispatch, FC, SetStateAction, useRef, useEffect } from "react";

interface StartButtonProps {
	playing: boolean;
	setPlaying: Dispatch<SetStateAction<boolean>>;
	hideButton: boolean;
	setHideButton: Dispatch<SetStateAction<boolean>>;
	text: string | number;
	setText: Dispatch<SetStateAction<string | number>>;
}

const StartButton: FC<StartButtonProps> = ({
	playing,
	setPlaying,
	hideButton,
	setHideButton,
	text,
	setText,
}) => {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const intervalRef = useRef<number | undefined>(undefined);

	// Start countdown, disable button
	const handleClick = () => {
		if (buttonRef.current !== null) {
			buttonRef.current.disabled = true;
		}
		setText(3);
	};

	// Countdown
	useEffect(() => {
		if (text === "Start") return;
		intervalRef.current = window.setInterval(() => {
			if (text === 1) {
				setText("Go!");
			} else {
				if (typeof text === "number") {
					setText(text - 1);
				}
			}
		}, 1000);
		return () => clearInterval(intervalRef.current);
	}, [text]);

	// Clear countdown, set playing state
	useEffect(() => {
		if (text === "Go!") {
			clearInterval(intervalRef.current);
			setPlaying(true);
			setTimeout(() => {
				setHideButton(true);
			}, 500);
		}
	}, [text]);

	return (
		<>
			{hideButton === false ? (
				<button
					ref={buttonRef}
					onClick={handleClick}
					className={
						"absolute top-0 bottom-0 left-0 right-0 m-auto h-10 w-32 rounded-md bg-blue-500 px-4 py-2 text-xl leading-tight text-white transition hover:bg-red-600 " +
						(playing === true ? "animate-fadeout" : undefined)
					}
				>
					{text}
				</button>
			) : null}
		</>
	);
};

export default StartButton;
