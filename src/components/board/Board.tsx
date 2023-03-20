import React, { FC, useState } from "react";
import Picker from "../picker/Picker";
import picture from "../../assets/1.jpg";

interface Position {
	x: number;
	y: number;
}

const Board: FC = () => {
	const [clickPos, setClickPos] = useState<Position>({ x: 0, y: 0 });
  const [view, setView] = useState<boolean>(false);

	const handleClick = (e) => {
		const localX = e.clientX;
		const localY = e.clientY - 30;
		console.log(localX, localY); // Delete Me.........................
		setClickPos({ x: localX, y: localY });
    setView(!view);
	};

	return (
		<div className="relative">
			<img alt="" src={picture} onClick={handleClick} />
			<Picker clickPos={clickPos} view={view} />
		</div>
	);
};

export default Board;
