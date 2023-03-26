import React, { FC, useRef, useEffect } from "react";
import { useDispatchContext, useStateContext } from "../../reducer";

const StartButton: FC = () => {
	const state = useStateContext();
	const dispatch = useDispatchContext();

	const buttonRef = useRef<HTMLButtonElement>(null);
	const intervalRef = useRef<number | undefined>(undefined);

	// Start countdown, disable button
	const handleClick = () => {
		if (buttonRef.current !== null) {
			buttonRef.current.disabled = true;
		}
		dispatch({ type: "SET_TEXT", payload: 3 });
	};

	// Countdown
	useEffect(() => {
		if (state.text === "Start") return;
		intervalRef.current = window.setInterval(() => {
			if (state.text === 1) {
				dispatch({ type: "SET_TEXT", payload: "Go!" });
			} else {
				if (typeof state.text === "number") {
					dispatch({ type: "SET_TEXT", payload: state.text - 1 });
				}
			}
		}, 1000);
		return () => clearInterval(intervalRef.current);
	}, [state.text]);

	// Clear countdown, set playing state
	useEffect(() => {
		if (state.text === "Go!") {
			clearInterval(intervalRef.current);
			dispatch({ type: "SET_PLAYING", payload: true });
			setTimeout(() => {
				dispatch({ type: "SET_HIDE_BUTTON", payload: true });
			}, 500);
		}
	}, [state.text]);

	return (
		<>
			{state.hideButton === false ? (
				<button
					data-testid="start-button"
					ref={buttonRef}
					onClick={handleClick}
					className={
						"absolute top-0 bottom-0 left-0 right-0 m-auto h-10 w-32 rounded-md bg-blue-500 px-4 py-2 text-xl leading-tight text-white transition hover:bg-red-600 " +
						(state.playing === true ? "animate-fadeout" : undefined)
					}
				>
					{state.text}
				</button>
			) : null}
		</>
	);
};

export default StartButton;
