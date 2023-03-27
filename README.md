# Where's Waldo

## Abstract
Where's Waldo game created for The Odin Project curriculum. 
### Gameplay:
Find Waldo and his friends in three different levels and upload your best time to the leaderboard.
### Features:
- Firebase Backend, with Google Authentication and Database
- Game
- Player Leaderboard

### Overview:
This project was build using React, Vite, Firebase and Tailwind. All of these technologies (save React) were new to me at the beginning of the project. Because of this, this application took a lot longer to create than most of my previous projects. 

Every step was a challenge and a learning opportunity and I'm proud of the result because of it. There were a few times where I felt the application was "complete", but each time I felt that it could be improved and wanted to try new ideas. I ended up refactoring the project a few times. I'm glad I did because I really feel like I learned so much with this project. More than any others so far. 

### TypeScript:
The biggest initial struggle was learning the typing system of TypeScript. It took some time to wrap my head around some of the concepts and syntax, but by the end of the project I definitely understood the concepts and felt and immediate result. It really felt like my code was more cohesive. 
### Tailwind:
I'll be honest, it felt wrong using Tailwind at first. Inlining all those classes looks bad but I will say that it was nice to not have to keep switching to a css file to edit my styles. I think I actually like the idea of keeping JSX and CSS in one place. One particular issue I ran into with Tailwind was how to go about unit testing CSS properties (*more on that later...*). After building this app, I feel like I grasp the main concepts of Tailwind and I'm definitely open to using it more in the future. 
### Firebase:
Another new piece of technology put to use was Firebase. Getting it set up was surprisingly easy. I ended up setting up storage to contain the images for the game and the database to contain the character coordinates for each level. Additionally, I set up user authentication and wrote the functionality to post times to the leaderboard if the user is logged in and completes a level.
### Vitest:
Up until this point I hadn't really utilized TDD for my projects. This is the first project where I decided to dive in head first and use unit testing to test my components. Since I built this project with Vite, I opted to use Vitest. Towards the beginning of my project, I ran into some trouble getting some of my tests to pass. This was mostly due to the fact that I used `useReducer` to hold my state and also that I wrapped my components in a `Context.Provider` to pass down my state to children components. For example:
```
export const StateContext = createContext<State>(initialState);
export const DispatchContext = createContext<Dispatch<Action>>(() => null);

const StateProvider: FC<PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				{children}
			</DispatchContext.Provider>
		</StateContext.Provider>
	);
}
```
This was my top level component. To pass state to my unit tests I ended up creating a mock component that accepts a state object as props and uses it as the initial state in the `useReducer` function. Next I created a custom render function that accepts a state object and passes the object as props to the Provider:
```
export const customRender = (
	ui: React.ReactElement,
	{ providerProps }: { providerProps: any }
) => {
	const { container } = render(
		<StateProvider initState={providerProps}>{ui}</StateProvider>
	);
	const style = document.createElement("style");
	style.innerHTML = cssFile;
	document.head.appendChild(style);
	return { ...container };
};
```
The function destructures a `container` object returned from the `render` function and I use that `container` to apply the output file of Tailwind to the `document.head`. This allows me to test CSS properties that come from Tailwind. Getting all of this to work was a struggle that took a lot of trial and error. I'm pretty happy with the result.
Once all of that was set up, writing the actual tests was a no brainer and I learned a lot. I definitely feel much more confident in my TDD abilities after making this project. 

### Project Functionality:

On render, the App fetches server data from the database, which includes leaderboard data, and images and coordinates for each level.
The user may login through Google authentication to display the "Personal Best" section of the leaderboard. 
Three "level buttons" are displayed that the user may choose from. When one of the buttons is pressed, the fetched data is sent through various functions to sort and extract the data for the specific level. Specifically, the image source for the level and the coordinates for each character. 
When the image loads, the width of the image is measured and used to apply a correction to the coordinates (which by default are scaled for a 1000px image). If the window is resized, the function will retrigger, applying another correction. 
A start button is rendered over the image (which is blurred initially). When the user clicks the start button, a countdown begins and state is dispatched as `playing: true`. A `useEffect` watches this state and sets time with `useRef` and `Date.now()`. 
The blur filter on the image is then removed and the user can begin to look for each character. The user can click on the image and a modal will appear at the click location so that a choice can be submitted. When a choice is selected, the click coordinates are compared against the coordinate data of the chosen character. If correct, the `state.objective` state will be updated for that character. If incorrect, an animation is triggered to let the user know that an incorrect choice was made. 
Once all characters are found, a `useEffect` that tracks `state.objective` will take note of the time and compare it to the saved time ref to get the total time (in seconds) that it took for the user to complete the level. If the user is signed in, this time gets sent to the server and added to the leaderboard. A "Next Level" modal appears, displaying the completion time and a button that the user can click to go to the next level. 
Steps are repeated for each of the following levels. 
Once level 3 is complete, the user will be taken back to the homepage where the leaderboard is displayed so they can see their times. 
This is the basic over view of how the app functions. 


## Lessons learned

- TypeScript! - *Interfaces, Type, Generics*
- TailwindCSS - *Basic use, Custom animations*
- Unit Testing with React and Vitest
- Vite
- Firebase backend
- Managing state with `useReducer` 

## Asset sources

All image assets and character's are property of Martin Handford.