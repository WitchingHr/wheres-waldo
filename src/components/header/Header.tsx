import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from "react";

import { useStateContext, useDispatchContext } from "../../reducer";
import { signInUser, signOutUser } from "../../firebase";
import pubsub from "../../pubsub";
import Logo from "../../assets/logo.png";

// Types
import { User } from "firebase/auth";
interface HeaderProps {
	signedIn: boolean;
	setSignedIn: Dispatch<SetStateAction<boolean>>;
}

// Header component:
const Header: FC<HeaderProps> = ({ signedIn, setSignedIn }) => {
	const state = useStateContext();
	const dispatch = useDispatchContext();
	const [name, setName] = useState<string | null>(null);

	const handleSignIn = (data: User) => {
		if (data) {
			setName(data.displayName);
			setSignedIn(true);
		} else {
			setSignedIn(false);
		}
	};

	// Listen for sign in / sign out
	useEffect(() => {
		pubsub.subscribe("authStateChanged", handleSignIn);
		return () => pubsub.unsubscribe("authStateChanged", handleSignIn);
	}, []);

	// Open leaderboard, hide board
	const handleClick = () => {
		dispatch({ type: "OPEN_LEADERBOARD" });
	};

	return (
		<div className="relative flex items-center justify-between">
			<img src={Logo} alt="" className="m-1 ml-2 h-10" />
			{state.viewLeader === false && (
				<button
					onClick={handleClick}
					className="left-0 right-0 mx-auto w-[175px] border px-3 text-lg duration-200 hover:bg-slate-200 md:absolute"
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
