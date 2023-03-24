import { Dispatch, SetStateAction } from "react";

// Types:
export interface Objective {
	Waldo: boolean;
	Odlaw: boolean;
	Wizard: boolean;
}

export interface Data {
	[key: string]: any;
}

export interface ObjectiveCon {
	objective: Objective;
	setObjective: Dispatch<SetStateAction<Objective>>;
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
