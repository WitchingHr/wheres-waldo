import React, { FC, useState, useEffect, useRef } from "react";
import { useStateContext } from "../../reducer";

// Components:
import Board from "../board/Board";
import LevelButton from "../levelbutton/LevelButton";
import Characters from "../characters/Characters";
import Header from "../header/Header";
import Leaderboard from "../leaderboard/Leaderboard";
import Modal from "../modal/Modal";

// Server functions:
import { useCoordinatesData, useLBData, sendTimeToServer } from "../../util";

// Types:
import { Data, LBData } from "../../types";

// App component:
const Wrapper: FC = () => {
	// State:
	const state = useStateContext();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [coordinatesData, setCoordinatesData] = useState<Data[]>([]);
	const [leaderBoardData, setLeaderBoardData] = useState<LBData>([]);
	const [personalBest, setPersonalBest] = useState<[number, string][] | null>(
		[]
	);
	const [time, setTime] = useState<number | null>(null);
	const [signedIn, setSignedIn] = useState<boolean>(false);

	// Get data on first render and set state and loading to false
	useEffect(() => {
    let ignore = false;
    if (state.viewLeader === true) {
      const getCoordinates = useCoordinatesData();
      const getLBData = useLBData();
      if (!ignore) { 
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
      }
    }
    return () => { ignore = true; }
	}, [state.viewLeader, signedIn]);

	// Start timer when playing === true
	const timerRef = useRef<number | null>(null);
	useEffect(() => {
		if (state.playing === true) {
			timerRef.current = Date.now();
		}
	}, [state.playing]);

	// Send time to server when all characters are found
	useEffect(() => {
		if (
			Object.values(state.objective).every((val) => val === true) &&
			timerRef.current !== null
		) {
			const time = (Date.now() - timerRef.current) / 1000;
			setTime(time);
			if (state.level !== null) {
				sendTimeToServer(time, state.level);
			}
		}
	}, [state.objective]);

	return (
		<div className="Wrapper">
			<Header signedIn={signedIn} setSignedIn={setSignedIn} />
			<div className="flex justify-between">
				{isLoading === false && (
					<div className="relative flex items-center">
						<ul className="ml-3 flex items-center gap-4">
							{levelArr.map((num) => {
								return (
									<li key={num}>
										<LevelButton name={num} />
									</li>
								);
							})}
						</ul>
						{state.level === null && (
							<span className="absolute top-1 left-32 ml-3 animate-arrow whitespace-nowrap font-bold">
								<span className="text-xl text-red-600">⇦</span>
								<span className="m-3 text-lg text-blue-500">
									Select a level to begin...
								</span>
							</span>
						)}
					</div>
				)}
				<Characters />
			</div>
			{isLoading === false && (
				<>
					{state.level === null ? (
						<Leaderboard
							leaderBoardData={leaderBoardData}
							personalBest={personalBest}
						/>
					) : (
						<Board data={coordinatesData}>
							{Object.values(state.objective).every((val) => val === true) && (
								<Modal time={time} />
							)}
						</Board>
					)}
				</>
			)}
		</div>
	);
};

export default Wrapper;

const levelArr = [1, 2, 3];
