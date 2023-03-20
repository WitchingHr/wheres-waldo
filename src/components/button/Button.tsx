import React, { FC, Fragment } from "react";

type ButtonProps = {
	name: number;
	level: number | null;
	handleClick: () => void;
};

const Button: FC<ButtonProps> = ({ name, level, handleClick }) => {
	return (
		<>
			{level !== name ? (
				<button onClick={handleClick} className="border px-2">
					{name}
				</button>
			) : (
				<button
					onClick={handleClick}
					disabled
					className="border bg-slate-300 px-2"
				>
					{name}
				</button>
			)}
		</>
	);
};

export default Button;
