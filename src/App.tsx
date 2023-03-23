import React, {
	FC,
	useState,
	createContext,
	SetStateAction,
	Dispatch,
	useEffect,
	useRef,
} from "react";

// Components
import Board from "./components/board/Board";
import LevelButton from "./components/levelbutton/LevelButton";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";

const levelArr = [1, 2, 3];

// Types
export interface Objective {
	Waldo: boolean;
	Odlaw: boolean;
	Wizard: boolean;
}

export interface Data {
	[key: string]: any;
}

interface ObjectiveCon {
	objective: Objective;
	setObjective: Dispatch<SetStateAction<Objective>>;
}

// Get data from server
import { colRef, getDocs } from "./firebase";
import Leaderboard from "./components/leaderboard/Leaderboard";
const data: Data[] = [];
const useData = (setIsLoading: Dispatch<SetStateAction<boolean>>) => {
	getDocs(colRef)
		.then((snapshot) => {
			snapshot.docs.forEach((doc) => {
				data.push({ ...doc.data() });
			});
			console.log(data); // Delete me...................................
			// Level select is hidden until load is complete
			setIsLoading(false);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

// Create context
export const ObjectiveContext = createContext<ObjectiveCon | null>(null);

// App component:
const App: FC = () => {
	// State:
	const [level, setLevel] = useState<number | null>(null);
	const [objective, setObjective] = useState<Objective>({
		Waldo: false,
		Odlaw: false,
		Wizard: false,
	});
	const [playing, setPlaying] = useState<boolean>(false);
	const [hideButton, setHideButton] = useState<boolean>(false);
	const [text, setText] = useState<string | number>("Start");
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [viewLeader, setViewLeader] = useState<boolean>(true);

	// Get data on first render (image url's and character coordinates)
	useEffect(() => {
		useData(setIsLoading);
	}, []);

	// Start timer when playing === true
	const timerRef = useRef<number | null>(null);
	useEffect(() => {
		if (playing === true) {
			timerRef.current = Date.now();
		}
	}, [playing]);

	// Get time when round complete
	useEffect(() => {
		if (
			Object.values(objective).every((val) => val === true) &&
			timerRef.current !== null
		) {
			const time = (Date.now() - timerRef.current) / 1000;
			console.log(time);
			// timerRef.current = null;
		}
	}, [objective]);

	return (
		<ObjectiveContext.Provider value={{ objective, setObjective }}>
			<div className="App">
				<Header setLevel={setLevel} viewLeader={viewLeader} setViewLeader={setViewLeader} />
				<div className="flex justify-between">
					{isLoading === false && (
						<div className="flex items-center">
							<ul className="ml-3 flex items-center gap-4">
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
												setText={setText}
												setViewLeader={setViewLeader}
											/>
										</li>
									);
								})}
							</ul>
							{level === null && (
								<span className="ml-3 font-bold">
									<span className="animate-arrow text-xl text-red-600">⇦</span>
									<span className="m-3 text-lg text-blue-500">
										Select a level to begin...
									</span>
								</span>
							)}
						</div>
					)}
					<Characters objective={objective} level={level} />
				</div>
				{level === null ? (
					<Leaderboard />
				) : (
					<Board
						data={data}
						level={level}
						playing={playing}
						setPlaying={setPlaying}
						hideButton={hideButton}
						setHideButton={setHideButton}
						text={text}
						setText={setText}
					/>
				)}
			</div>
		</ObjectiveContext.Provider>
	);
};

export default App;
