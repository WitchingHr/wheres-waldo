import React, { FC } from "react";
import waldo from "../../assets/Waldo.jpg";
import odlaw from "../../assets/Odlaw.jpg";
import wizard from "../../assets/Wizard.jpg";

// Types
import { DataSorted } from "../../util";
interface LeaderboardProps {
	leaderBoardData: DataSorted;
}

const levels = [1, 2, 3];

const Leaderboard: FC<LeaderboardProps> = ({ leaderBoardData }) => {
	return (
		<div className="m-2 flex flex-col gap-10">
			<div>
				<div className="border py-1 text-center text-2xl font-bold text-blue-500">
					Leaderboard
				</div>
				<ul className="flex">
					{levels.map((level) => (
						<li
							key={level}
							className="flex-auto border py-1 text-center text-lg"
						>
							Level {level}
						</li>
					))}
				</ul>

				<div className="flex">
					{leaderBoardData.map((level, i) => (
						<ul key={i} className="flex-auto border">
							{level.map((item: [number, string], j: number) => (
								<li
									key={j}
									className="left-[-1px] flex items-center gap-2 text-lg"
								>
									<img
										src={j % 2 === 0 ? waldo : j % 3 === 0 ? odlaw : wizard}
										alt="waldo"
										className="h-10"
									/>
									<span className="grow-[1] text-center text-blue-500">
										{item[0].toFixed(1)}s
									</span>
									<span className="grow-[3] text-center font-bold text-red-600">
										{item[1]}
									</span>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>

			<div>
				<div className="border py-1 text-center text-2xl font-bold text-blue-500">
					Personal Best
				</div>

				{/* <div className="flex">
          {leaderBoardData.map((level, i) =>
            <ul key={i} className="flex-auto border">
              {level.map((item: [number, string], j: number) => 
                <li key={j} className="flex text-lg items-center gap-2 left-[-1px]">
                  <img src={waldo} alt="waldo" className="h-10" />
                  <span className="grow-[1] text-center text-blue-500">{item[0].toFixed(1)}s</span>
                  <span className="grow-[3] text-center text-red-600 font-bold">{item[1]}</span>
                </li>
              )}
            </ul>
          )}
        </div> */}
			</div>
		</div>
	);
};

export default Leaderboard;
