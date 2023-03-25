import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { signInUser, signOutUser, firebaseObserver } from "../../firebase";
// Logo
import Logo from "../../assets/logo.png";

// Types
import { User } from "firebase/auth";
interface HeaderProps {
	setLevel: Dispatch<SetStateAction<number | null>>;
	viewLeader: boolean;
	setViewLeader: Dispatch<SetStateAction<boolean>>;
	signedIn: boolean;
	setSignedIn: Dispatch<SetStateAction<boolean>>;
}

// Header component:
const Header: FC<HeaderProps> = ({ setLevel, viewLeader, setViewLeader, signedIn, setSignedIn }) => {
	const [name, setName] = useState<string | null>(null);

	// Listen for sign in / sign out
	useEffect(() => {
		firebaseObserver.subscribe("authStateChanged", (data: User) => {
			if (data) {
				setName(data.displayName);
				setSignedIn(true);
			} else {
				setSignedIn(false);
			}
		});
		return () => firebaseObserver.unsubscribe("authStateChanged");
	}, []);

	const handleClick = () => {
		setLevel(null);
		setViewLeader(true);
	};

	return (
		<div className="relative flex items-center justify-between">
			<img src={Logo} alt="" className="m-1 ml-2 h-10" />
			{viewLeader === false && (
				<button
					onClick={handleClick}
					className="md:absolute left-0 right-0 w-[175px] mx-auto border px-3 duration-200 text-lg hover:bg-slate-200"
				>
					View Leaderboard
				</button>
			)}
			<span className="flex items-center gap-2 text-lg">
				{signedIn && (
					<span className="text-blue-500">
						Signed in as:
						<span className="ml-2 font-bold text-red-600">{name}</span>
					</span>
				)}
				{signedIn ? (
					<button
						onClick={signOutUser}
						className="mr-2 border px-3 duration-200 hover:bg-slate-200"
					>
						Sign out
					</button>
				) : (
					<button
						onClick={signInUser}
						className="mr-2 border px-3 duration-200 hover:bg-slate-200"
					>
						Sign in
					</button>
				)}
			</span>
		</div>
	);
};

export default Header;
