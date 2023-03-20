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
import Button from "./components/button/Button";
import Characters from "./components/characters/Characters";

const levelArr: number[] = [1, 2, 3, 4, 5, 6];

// Types
interface Objective {
	waldo: boolean;
	odlaw: boolean;
	wizard: boolean;
}

interface ObjectiveCon {
	objective: Objective;
	setObjective: Dispatch<SetStateAction<Objective>>;
}

// Create context
export const ObjectiveContext = createContext<ObjectiveCon | null>(null);

// App component:
// Fetches data and holds objective state
const App: FC = () => {
	const [level, setLevel] = useState<number | null>(null);
	const [objective, setObjective] = useState<Objective>({
		waldo: false,
		odlaw: false,
		wizard: false,
	});

	// Check if round is complete
	useEffect(() => {
		const values = Object.values(objective);
		if (values.every((value) => value === true)) {
			alert("You win!");
			// TODO: Add state for round complete
		}
	}, [objective]);

	// TODO: Add Effect that watches level state to fetch data

	return (
		<ObjectiveContext.Provider value={{ objective, setObjective }}>
			<div className="App">
				<div className="flex justify-between">
					<ul className="ml-1 flex items-center gap-4">
						{levelArr.map((num) => {
							return (
								<li key={num}>
									<Button
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
				<Board />
			</div>
		</ObjectiveContext.Provider>
	);
};

export default App;
