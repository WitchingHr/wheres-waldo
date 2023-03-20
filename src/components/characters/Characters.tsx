import React, { FC } from "react";
import CharImage from "./CharImage";
import Waldo from "../../assets/Waldo.jpg";
import Odlaw from "../../assets/Odlaw.jpg";
import Wizard from "../../assets/Wizard.jpg";

interface CharacterProps {
	objective: {
		waldo: boolean;
		odlaw: boolean;
		wizard: boolean;
	};
}

const Characters: FC<CharacterProps> = ({ objective }) => {
	const { waldo, odlaw, wizard } = objective;
	return (
		<div className="mr-4 flex h-10 items-center">
			<div className="relative mr-3 animate-slide rounded-lg bg-slate-200 px-3">
				Find us!
				<div className="absolute -right-2 top-2 h-0 w-0 border-t-4 border-b-4 border-l-8 border-t-white border-b-white border-l-slate-200 bg-slate-200"></div>
			</div>
			<CharImage src={Waldo} char={waldo} />
			<CharImage src={Odlaw} char={odlaw} />
			<CharImage src={Wizard} char={wizard} />
		</div>
	);
};

export default Characters;
