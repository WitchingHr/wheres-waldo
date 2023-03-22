import React, {
	FC,
	useState,
	createContext,
	SetStateAction,
	Dispatch,
	useEffect,
} from "react";

// Components
import Board from "./components/board/Board";
import LevelButton from "./components/levelbutton/LevelButton";
import Characters from "./components/characters/Characters";

const levelArr = [1, 2, 3];

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

// Get data from server
import { colRef, getDocs } from "./firebase";
const data: Data[] = [];
const useData = () => {
	getDocs(colRef)
		.then((snapshot) => {
			console.log(snapshot.docs);
			snapshot.docs.forEach((doc) => {
				data.push({ ...doc.data() });
			});
			console.log(data);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

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
	const [playing, setPlaying] = useState<boolean>(false);
	const [hideButton, setHideButton] = useState<boolean>(false);

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
										setLevel={setLevel}
										setObjective={setObjective}
										setPlaying={setPlaying}
										setHideButton={setHideButton}
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
					<Board
						data={data}
						level={level}
						playing={playing}
						setPlaying={setPlaying}
						hideButton={hideButton}
						setHideButton={setHideButton}
					/>
				)}
			</div>
		</ObjectiveContext.Provider>
	);
};

export default App;
