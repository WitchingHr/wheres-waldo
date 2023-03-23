import React, { FC, useEffect, useState } from "react";
import { signInUser, signOutUser, firebaseObserver } from "../../firebase";
// Types
import { User } from "firebase/auth";
// Logo
import Logo from "../../assets/logo.png";

const Header: FC = () => {
	const [name, setName] = useState<string | null>(null);
	const [signedIn, setSignedIn] = useState<boolean>(false);

	// Listen for auth events
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

	return (
		<div className="flex items-center justify-between">
			<img src={Logo} alt="" className="m-1 ml-2 h-10" />
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
