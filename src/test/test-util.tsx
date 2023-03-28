import React, { FC, useReducer, PropsWithChildren } from "react";
import fs from "fs";
import path from "path";
import { render } from "@testing-library/react";
import { DispatchContext, StateContext } from "../reducer";
import { reducer } from "../reducer";

// Importing the css file to be used in tests
const cssFile = fs.readFileSync(
	path.resolve(__dirname, "../../dist/assets/index-a4925fe9.css"),
	"utf8"
);

// Types:
interface StateProviderProps {
	initState: any;
}

// Mocking the StateProvider component and reducer for tests
// Can pass in any state to test
const StateProvider: FC<PropsWithChildren<StateProviderProps>> = ({
	children,
	initState,
}) => {
	const [state, dispatch] = useReducer(reducer, initState);
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

// Custom render function to wrap the component in the StateProvider
// and add the css file to the document head
export const customRender = (
	ui: React.ReactElement,
	{ providerProps }: { providerProps: any }
) => {
	const { container } = render(
		<StateProvider initState={providerProps}>{ui}</StateProvider>
	);
	const style = document.createElement("style");
	style.innerHTML = cssFile;
	document.head.appendChild(style);
	return { ...container };
};

// Mock data for tests
export const coordinatesData = [
	{
		odlaw: ["Odlaw", 99, 231],
		waldo: ["Waldo", 615, 244],
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/1.jpg?alt=media&token=fe77ad33-475d-4364-bfc4-29ed94a70600",
		wizard: ["Wizard", 263, 230],
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/2.jpg?alt=media&token=a86174b6-62c8-437a-b139-2c1e22563451",
		wizard: ["Wizard", 781, 383],
		waldo: ["Waldo", 405, 411],
		odlaw: ["Odlaw", 70, 456],
	},
	{
		img: "https://firebasestorage.googleapis.com/v0/b/where-s-waldo-9.appspot.com/o/3.jpg?alt=media&token=7ecae02b-b250-463a-96ca-291b448a1336",
		waldo: ["Waldo", 703, 279],
		wizard: ["Wizard", 691, 438],
		odlaw: ["Odlaw", 556, 515],
	},
];

export const leaderBoardData = [
	[[4.785, "Matt T"]],
	[[6.826, "Matt T"]],
	[[4.266, "Matt T"]],
];

export const personalBest = [
	[4.785, "Matt T"],
	[6.826, "Matt T"],
	[4.266, "Matt T"],
];
