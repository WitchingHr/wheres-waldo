import React, { FC } from "react";
import { useStateContext } from "../../reducer";
import waldo from "../../assets/Waldo.jpg";
import odlaw from "../../assets/Odlaw.jpg";
import wizard from "../../assets/Wizard.jpg";

const Leaderboard: FC = () => {
	const state = useStateContext();
	const { personalBest, leaderBoardData } = state;
	return (
		<div className="m-2 mx-auto flex w-11/12 flex-col gap-10 sm:w-11/12 md:w-3/4 lg:w-3/4">
			<div>
				<div className="border py-1 text-center text-2xl font-bold text-blue-500">
					Personal
				</div>
				<ul className="flex">
					{levels.map((level) => (
						<li key={level} className="w-1/3 border py-1 text-center text-lg">
							Level {level}
						</li>
					))}
				</ul>
				{personalBest !== null ? (
					<ul className="flex">
						{personalBest.map((level, i) => (
							<li
								key={i}
								className="flex w-1/3 items-center gap-2 border text-lg"
							>
								<img src={waldo} alt="waldo" className="h-10" />
								<span className="grow-[1] text-center text-blue-500">
									{level[0].toFixed(1)}s
								</span>
								<span className="grow-[3] overflow-hidden text-ellipsis text-center font-bold text-red-600">
									{level[1]}
								</span>
							</li>
						))}
					</ul>
				) : (
					<div className="border py-1 text-center text-lg font-bold text-red-600">
						Log in to upload your best times and view your personal best
					</div>
				)}
			</div>

			<div>
				<div className="border py-1 text-center text-2xl font-bold text-blue-500">
					Leaderboard
				</div>
				<ul className="flex">
					{levels.map((level) => (
						<li key={level} className="w-1/3 border py-1 text-center text-lg">
							Level {level}
						</li>
					))}
				</ul>
				<div className="flex">
					{leaderBoardData !== null && leaderBoardData.map((level, i) => (
						<ul key={i} className="w-1/3">
							{level.map((item: [number, string], j: number) => (
								<li key={j} className="flex items-center gap-2 border text-lg">
									<img
										src={j % 2 === 0 ? waldo : j % 3 === 0 ? odlaw : wizard}
										alt="waldo"
										className="h-10"
									/>
									<span className="grow-[1] text-center text-blue-500">
										{item[0].toFixed(1)}s
									</span>
									<span className="grow-[3] overflow-hidden text-ellipsis text-center font-bold text-red-600">
										{item[1]}
									</span>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</div>
	);
};

export default Leaderboard;

const levels = [1, 2, 3];
