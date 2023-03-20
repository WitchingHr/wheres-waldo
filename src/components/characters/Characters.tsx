import React, { FC } from "react";

// Components
import CharImage from "./CharImage";

// Images
import waldoImg from "../../assets/Waldo.jpg";
import odlawImg from "../../assets/Odlaw.jpg";
import wizardImg from "../../assets/Wizard.jpg";

// Types
import { Objective } from "../../App";
interface CharacterProps {
	objective: Objective;
}

// Characters component:
// - wrapper component for character images
const Characters: FC<CharacterProps> = ({ objective }) => {
	const { Waldo, Odlaw, Wizard } = objective;
	return (
		<div className="mr-4 flex h-10 items-center">
			<div className="relative mr-3 animate-slide rounded-lg bg-slate-200 px-3">
				Find us!
				<div className="absolute -right-2 top-2 h-0 w-0 border-t-4 border-b-4 border-l-8 border-t-white border-b-white border-l-slate-200 bg-slate-200"></div>
			</div>
			<CharImage src={waldoImg} char={Waldo} />
			<CharImage src={odlawImg} char={Odlaw} />
			<CharImage src={wizardImg} char={Wizard} />
		</div>
	);
};

export default Characters;
