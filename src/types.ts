// Types:

export interface State {
	level: number | null;
	playing: boolean;
	hideButton: boolean;
	text: string | number;
	viewLeader: boolean;
	objective: {
		Waldo: boolean;
		Odlaw: boolean;
		Wizard: boolean;
	};
	isLoading: boolean;
	personalBest: [number, string][] | null;
	leaderBoardData: LBData | null;
	coordinatesData: CoordinatesData | null;
}

export interface CustomRenderOptions {
	providerProps: State;
}

export interface Action {
	type: string;
	payload?: any;
}

export interface Objective {
	Waldo: boolean;
	Odlaw: boolean;
	Wizard: boolean;
}

export interface Data {
	[key: string]: any;
}

export interface Position {
	x: number;
	y: number;
}

interface Coordinate {
	char: string;
	coordinate: [number, number];
}

export type Coordinates = Coordinate[];

type LBEntry = [number, string];
type LBLevel = LBEntry[];
export type LBData = LBLevel[];

type characterData = [string, number, number];
interface levelData {
	img: string;
	waldo: characterData[];
	odlaw: characterData[];
	wizard: characterData[];
}
type CoordinatesData = levelData[];
