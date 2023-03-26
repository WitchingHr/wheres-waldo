import React, { FC } from "react";

// Components:
import StateProvider from "./reducer";
import Wrapper from "./components/wrapper/Wrapper";

// App component:
const App: FC = () => {
	return (
		<StateProvider>
			<Wrapper />
		</StateProvider>
	);
};

export default App;
