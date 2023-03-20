import React, { FC, MouseEventHandler, useState } from "react";
import Picker from "../picker/Picker";
import picture from '../../assets/1.jpg';

interface Position {
  x: number,
  y: number
}

const Board: FC = () => {
  const [clickPos, setClickPos] = useState<Position | object>({});

  const handleClick = (e) => {
    const localX = e.clientX - e.target.offsetLeft;
    const localY = e.clientY - e.target.offsetTop;
    console.log(localX, localY); // Delete Me.........................
    setClickPos({x: localX, y: localY});
  }

  return (
    <div>
      <img alt="" src={picture} onClick={handleClick} />
      <Picker clickPos={clickPos} />
    </div>
  );
}

export default Board;