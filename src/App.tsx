import React, {
	FC,
	useState,
	createContext,
	SetStateAction,
	Dispatch,
	useEffect,
} from "react";

// Data
import { colRef, getDocs } from './firebase';
const data: Data[] = [];
const useData = () => {
	getDocs(colRef)
		.then((snapshot) => {
			console.log(snapshot.docs)
			snapshot.docs.forEach((doc) => {
				data.push({...doc.data()})
			})
			console.log(data);
		})
		.catch((err) => {
			console.log(err.message);
		});
}

// Components
import Board from "./components/board/Board";
import LevelButton from "./components/button/Button";
import Characters from "./components/characters/Characters";

const levelArr: number[] = [1, 2, 3, 4, 5, 6];

// Types
export interface Objective {
	Waldo: boolean;
	Odlaw: boolean;
	Wizard: boolean;
}

export interface Data {
	img: string;
	waldo: [string, number, number];
	odlaw: [string, number, number];
	wizard: [string, number, number];
}

interface ObjectiveCon {
	objective: Objective;
	setObjective: Dispatch<SetStateAction<Objective>>;
}

// Create context
export const ObjectiveContext = createContext<ObjectiveCon | null>(null);

// App component:
const App: FC = () => {
	const [level, setLevel] = useState<number | null>(null);
	const [objective, setObjective] = useState<Objective>({
		Waldo: false,
		Odlaw: false,
		Wizard: false,
	});

	useEffect(() => {
		useData();
	}, []);

	// Check if round is complete
	useEffect(() => {
		const values = Object.values(objective);
		if (values.every((value) => value === true)) {
			// TODO: Add state for round complete
		}
	}, [objective]);

	return (
		<ObjectiveContext.Provider value={{ objective, setObjective }}>
			<div className="App">
				<div className="flex justify-between">
					<ul className="ml-1 flex items-center gap-4">
						{levelArr.map((num) => {
							return (
								<li key={num}>
									<LevelButton
										name={num}
										level={level}
										handleClick={() => setLevel(num)}
									/>
								</li>
							);
						})}
					</ul>
					<Characters objective={objective} />
				</div>
				{level === null ? (
					<div>Select a level to begin...</div>
				) : (
					<Board data={data} level={level} />
				)}
			</div>
		</ObjectiveContext.Provider>
	);
};

export default App;
