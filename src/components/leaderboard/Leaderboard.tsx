import React, { FC } from "react";
import waldo from '../../assets/Waldo.jpg';
import odlaw from '../../assets/Odlaw.jpg';
import wizard from '../../assets/Wizard.jpg';

// TODO: Get LB Data

const levels: number[] = [1, 2, 3];

const Leaderboard: FC = () => {
	return (
		<div className="m-2 flex flex-col">
			<div className="border py-1 text-center text-2xl font-bold text-blue-500">
				Leaderboard
			</div>
			<ul className="flex">
				{levels.map((level) => (
					<span
						key={level}
						className="flex-auto border py-1 text-lg text-center"
					>
						Level {level}
					</span>
				))}
			</ul>
			<div className="flex"> {/* level lists */}
        <ul className="flex-auto">
          <li className="flex text-lg items-center gap-2">
            <img src={waldo} alt="waldo" className="h-10" />
            <span className="grow-[1] text-center text-blue-500">Time</span>
            <span className="grow-[3] text-center text-red-600 font-bold">Name</span>
          </li>
        </ul>
        <ul className="flex-auto">
          <li className="flex text-lg items-center gap-2">
            <img src={odlaw} alt="waldo" className="h-10" />
            <span className="grow-[1] text-center text-blue-500">Time</span>
            <span className="grow-[3] text-center text-red-600 font-bold">Name</span>
          </li>
        </ul>
        <ul className="flex-auto">
          <li className="flex text-lg items-center gap-2">
            <img src={wizard} alt="waldo" className="h-10" />
            <span className="grow-[1] text-center text-blue-500">Time</span>
            <span className="grow-[3] text-center text-red-600 font-bold">Name</span>
          </li>
        </ul>
      </div>
		</div>
	);
};

export default Leaderboard;
