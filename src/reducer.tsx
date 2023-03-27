import React, {
	Dispatch,
	FC,
	PropsWithChildren,
	useReducer,
	useContext,
	createContext,
} from "react";

import { State, Action } from "./types";

export const initialState = {
	level: null,
	playing: false,
	hideButton: false,
	text: "Start",
	viewLeader: true,
	objective: {
		Waldo: false,
		Odlaw: false,
		Wizard: false,
	},
	isLoading: true,
	coordinatesData: [],
	leaderBoardData: [],
	personalBest: [],
};

export const StateContext = createContext<State>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => null);

const StateProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
};

export default StateProvider;

export const useStateContext = () => {
	return useContext(StateContext);
};

export const useDispatchContext = () => {
	return useContext(DispatchContext);
};

export const reducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case "SET_DATA":
			return {
				...state,
				isLoading: false,
				coordinatesData: action.payload.coordinatesData,
				leaderBoardData: action.payload.leaderBoardData,
				personalBest: action.payload.personalBest,
			};
		case "SET_LEVEL":
			return {
				...state,
				level: action.payload,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				playing: false,
				hideButton: false,
				text: "Start",
				viewLeader: false,
			};
		case "OPEN_LEADERBOARD":
			return {
				...state,
				viewLeader: true,
				level: null,
			};
		case "SET_TEXT":
			return {
				...state,
				text: action.payload,
			};
		case "SET_PLAYING":
			return {
				...state,
				playing: action.payload,
			};
		case "SET_HIDE_BUTTON":
			return {
				...state,
				hideButton: action.payload,
			};
		case "SET_OBJECTIVE":
			return {
				...state,
				objective: action.payload,
			};
		case "SET_NEXT_LEVEL":
			return {
				...state,
				level: action.payload,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				playing: false,
				hideButton: false,
				text: "Start",
			};
		case "SET_GAME_OVER":
			return {
				...state,
				level: null,
				viewLeader: true,
				setObjective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				playing: false,
				hideButton: false,
				text: "Start",
			};
		default:
			return state;
	}
};
