import React, { FC } from "react";
import CharImage from "./CharImage";
import Waldo from '../../assets/Waldo.jpg';
import Odlaw from '../../assets/Odlaw.jpg';
import Wizard from '../../assets/Wizard.jpg';

interface CharacterProps {
  objective: {
    waldo: boolean,
    odlaw: boolean,
    wizard: boolean
  }
}

const Characters: FC<CharacterProps> = ({ objective }) => {
  const { waldo, odlaw, wizard } = objective;
  return (
    <div className="flex items-center h-10 mr-4">
      <div className="animate-slide rounded-lg bg-slate-200 px-3 relative mr-3">
        Find us!
        <div className="absolute bg-slate-200 h-0 w-0 border-t-4 border-t-white border-b-4 border-b-white border-l-8 border-l-slate-200 -right-2 top-2"></div>
      </div>
      <CharImage src={Waldo} char={waldo} />
      <CharImage src={Odlaw} char={odlaw} />
      <CharImage src={Wizard} char={wizard} />
    </div>
  );
}

export default Characters;