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

type func = (data: any) => void;

interface event {
  // [key: string]: (data: any) => void[];
  [key: string]: func[];
}

export interface PubSub {
  events: event;
  subscribe: (eventName: string, fn: (data: any) => void) => void;
  unsubscribe: (eventName: string, fn: (data: any) => void) => void;
  publish: (eventName: string, data: any) => void;
}