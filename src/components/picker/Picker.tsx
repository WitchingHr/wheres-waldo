import React, { FC } from "react";

// Components
import PickerButton from "./PickerButton";

// Pics
import Waldo from '../../assets/Waldo.jpg';
import Odlaw from '../../assets/Odlaw.jpg';
import Wizard from '../../assets/Wizard.jpg';

// Types
interface PickerProps {
  clickPos: Position | object
}

interface Position {
  x: number,
  y: number
}

const Picker: FC<PickerProps> = ({ clickPos }) => {
  const {x, y} = clickPos;

  return (
    <div className="border mx-2">
      <ul className="h-16 w-16">
        <PickerButton src={Waldo} char="waldo" />
        <PickerButton src={Odlaw} char="odlaw" />
        <PickerButton src={Wizard} char="wizard" />
      </ul>
    </div>
  );
}

export default Picker;