import React, { FC, useState, createContext, useEffect, useRef } from "react";

// Components:
import Board from "./components/board/Board";
import LevelButton from "./components/levelbutton/LevelButton";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import Leaderboard from "./components/leaderboard/Leaderboard";

// Server functions:
import { useCoordinatesData, useLBData, sendTimeToServer } from "./util";

// Types:
import { Objective, Data, ObjectiveCon, LBData } from "./types";

// Context:
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
	const [coordinatesData, setCoordinatesData] = useState<Data[]>([]);
	const [leaderBoardData, setLeaderBoardData] = useState<LBData>([]);
	const [personalBest, setPersonalBest] = useState<[number, string][]>([]);
	const [time, setTime] = useState<number | null>(null);

	// Get data on first render and set state and loading to false
	useEffect(() => {
		const getCoordinates = useCoordinatesData();
		const getLBData = useLBData();
		Promise.all([getCoordinates, getLBData])
			.then((values) => {
				setCoordinatesData(values[0]);
				setLeaderBoardData(values[1][0]);
				setPersonalBest(values[1][1]);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	// Start timer when playing === true
	const timerRef = useRef<number | null>(null);
	useEffect(() => {
		if (playing === true) {
			timerRef.current = Date.now();
		}
	}, [playing]);

	// Send time to server when all characters are found
	useEffect(() => {
		if (
			Object.values(objective).every((val) => val === true) &&
			timerRef.current !== null
		) {
			const time = (Date.now() - timerRef.current) / 1000;
			setTime(time);
			if (level !== null) {
				sendTimeToServer(time, level);
			}
		}
	}, [objective]);

	return (
		<ObjectiveContext.Provider value={{ objective, setObjective }}>
			<div className="App">
				<Header
					setLevel={setLevel}
					viewLeader={viewLeader}
					setViewLeader={setViewLeader}
				/>
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
				{isLoading === false && (
					<>
						{level === null ? (
							<Leaderboard
								leaderBoardData={leaderBoardData}
								personalBest={personalBest}
							/>
						) : (
							<Board
								data={coordinatesData}
								level={level}
								setLevel={setLevel}
								objective={objective}
								setObjective={setObjective}
								time={time}
								playing={playing}
								setPlaying={setPlaying}
								hideButton={hideButton}
								setHideButton={setHideButton}
								text={text}
								setText={setText}
								setViewLeader={setViewLeader}
							/>
						)}
					</>
				)}
			</div>
		</ObjectiveContext.Provider>
	);
};

export default App;

const levelArr = [1, 2, 3];
