import React, { FC, useState } from "react";
import Board from "./components/board/Board";
import Button from "./components/button/Button";
import Characters from "./components/characters/Characters";

const levelArr: number[] = [1, 2, 3, 4, 5, 6];

interface Objective {
	waldo: boolean;
	odlaw: boolean;
	wizard: boolean;
}

const App: FC = () => {
	const [level, setLevel] = useState<number | null>(null);
	const [objective, setObjective] = useState<Objective>({
		waldo: false,
		odlaw: false,
		wizard: false,
	});

	// TODO: Add Effect that watches level state to fetch data

	return (
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
	);
};

export default App;
