// Server
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { colRef, db } from "./firebase";

// Images
import waldoImg from "./assets/Waldo.jpg";
import odlawImg from "./assets/Odlaw.jpg";
import wizardImg from "./assets/Wizard.jpg";

// Types:
import { RefObject, Dispatch, SetStateAction } from "react";
import { LBData, Coordinates, Data, Position } from "./types";

// Functions:
// Get coordinates and image source
export const useCoordinatesData = () => {
	const data: Data[] = [];
	getDocs(colRef)
		.then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				data.push({ ...doc.data() });
			});
		})
		.catch((err) => {
			console.log(err.message);
		});
	return data;
};

// Sort leaderboard data
const sortLBData = (data: Data[]) => {
	const result: LBData = [[], [], []];
	data.forEach((obj, index) => {
		const keys = Object.keys(obj);
		keys.forEach((key) => {
			const time = obj[key].time;
			const name = obj[key].name;
			result[index].push([time, name]);
		});
		result[index].sort((a, b) => a[0] - b[0]);
	});
	return result;
};

// Get leaderboard data
export const useLBData = async (): Promise<[LBData, [number, string][]]> => {
	const data: Data[] = [];
	const querySnapshot = await getDocs(collection(db, "leaderboard"));
	querySnapshot.forEach((doc) => {
		data.push(doc.data());
	});
	const personalBest = getPersonalBest(data);
	const sortedLBData = sortLBData(data);
	return [sortedLBData, personalBest];
};

// Filter LB data to get user's time
export const getPersonalBest = (data: Data[]): [number, string][] => {
	const auth = getAuth();
	const userID: any = auth.currentUser?.uid;
	const result: [number, string][] = [];
	data.forEach((level) => {
		Object.entries(level).forEach((user) => {
			if (user[0] === userID) {
				const { time, name } = user[1];
				result.push([time, name]);
			}
		});
	});
	return result;
};

// Send time and user info to server for leaderboard
export const sendTimeToServer = async (time: number, level: number) => {
	const auth = getAuth();
	const user: any = auth.currentUser?.uid;
	const name = auth.currentUser?.displayName;
	const levelString = level?.toFixed();
	const ref = doc(db, "leaderboard", levelString);
	await updateDoc(ref, {
		[user]: {
			name: name,
			time: time,
		},
	});
};

// Offsets modal position if click is near edge of container
export const usePositionOffset = (
	x: number,
	y: number,
	ref: RefObject<HTMLImageElement>
): Position => {
	if (ref.current !== null) {
		// Get height and width of image
		const width: number = ref.current.offsetWidth;
		const height: number = ref.current.offsetHeight;
		// Update x or y if past breakpoint
		if (y >= height - 126) {
			y = height - 129;
		}
		if (x >= width - 160) {
			x = width - 170;
		}
	}
	return { x: x, y: y };
};

// Calculate scale factor by dividing image width with prev width | number
const calcScaleFactor = (
	ref1: RefObject<HTMLImageElement>,
	ref2: RefObject<number> | number
): number => {
	if (typeof ref2 === "object") {
		if (ref1.current !== null && ref2.current !== null) {
			const width: number = ref1.current.offsetWidth;
			return width / ref2.current;
		}
	} else {
		if (ref1.current !== null) {
			const width: number = ref1.current.offsetWidth;
			return width / ref2;
		}
	}
	throw new Error("Bad ref");
};

// Calculates new coordinates by multiplying coordinates by scale factor
const calcNewCoordinates = (
	coordinate: [number, number],
	scaleFactor: number
): [number, number] => {
	const [x, y] = coordinate;
	return [Math.trunc(x * scaleFactor), Math.trunc(y * scaleFactor)];
};

// Calculate coordinates based on image width
export const updateCoordinatesOnResize = (
	ref1: RefObject<HTMLImageElement>,
	ref2: RefObject<number> | number,
	coordinates: Coordinates
) => {
	if (ref1 !== null) {
		const scaleFactor = calcScaleFactor(ref1, ref2);
		coordinates = coordinates.map((char) => {
			const xy = char.coordinate;
			return { ...char, coordinate: calcNewCoordinates(xy, scaleFactor) };
		});
	}
	return coordinates;
};

// On correct => animate button, close modal
export const useCorrect = (
	ref: RefObject<HTMLButtonElement>,
	fn: Dispatch<SetStateAction<boolean>>
) => {
	if (ref.current !== null) {
		ref.current.classList.toggle("animate-correct");
		setTimeout(() => {
			if (ref.current !== null) {
				ref.current.classList.toggle("animate-correct");
				fn(false);
			}
		}, 500);
	}
};

// On incorrect => animate button
export const useIncorrect = (ref: RefObject<HTMLButtonElement>) => {
	if (ref.current !== null) {
		ref.current.classList.toggle("animate-incorrect");
		setTimeout(() => {
			if (ref.current !== null) {
				ref.current.classList.toggle("animate-incorrect");
			}
		}, 600);
	}
};

// Get image source based on character
export const usePic = (char: string) => {
	if (char === "Waldo") return waldoImg;
	if (char === "Odlaw") return odlawImg;
	if (char === "Wizard") return wizardImg;
};
