import React from "react";
import { screen } from "@testing-library/react";
import {
	coordinatesData,
	customRender,
	leaderBoardData,
	personalBest,
} from "../../test/test-util";
import Wrapper from "./Wrapper";
import userEvent from "@testing-library/user-event";

describe("Wrapper when finished loading", () => {
	const user = userEvent.setup();

	it("should render the select a level to begin message if no level is selected", () => {
		customRender(<Wrapper />, {
			providerProps: {
				level: null,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				isLoading: false,
				coordinatesData: coordinatesData,
				leaderBoardData: leaderBoardData,
				personalBest: personalBest,
			},
		});
		const select = screen.getByText(/Select a level to begin/i);
		expect(select).toBeInTheDocument();
	});

	it("should show the leaderboard on render", () => {
		customRender(<Wrapper />, {
			providerProps: {
				level: null,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				isLoading: false,
				coordinatesData: coordinatesData,
				leaderBoardData: leaderBoardData,
				personalBest: personalBest,
			},
		});
		const leaderboard = screen.getByText(/personal best/i);
		expect(leaderboard).toBeInTheDocument();
	});

	it("should render the board if a level is selected", () => {
		customRender(<Wrapper />, {
			providerProps: {
				level: 1,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				isLoading: false,
				coordinatesData: coordinatesData,
				leaderBoardData: leaderBoardData,
				personalBest: personalBest,
			},
		});
		const board = screen.getByTestId("board");
		expect(board).toBeInTheDocument();
	});

	it("should render the characters with class animate-rise when a level is selected", () => {
		customRender(<Wrapper />, {
			providerProps: {
				level: 1,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				isLoading: false,
				coordinatesData: coordinatesData,
				leaderBoardData: leaderBoardData,
				personalBest: personalBest,
			},
		});
		const characters = screen.getByTestId("characters");
		expect(characters).toHaveClass("animate-rise");
	});

	it("should render the board when level button is clicked", async () => {
		customRender(
			// customRender(
			<Wrapper />,
			{
				providerProps: {
					level: null,
					objective: {
						Waldo: false,
						Odlaw: false,
						Wizard: false,
					},
					isLoading: false,
					coordinatesData: coordinatesData,
					leaderBoardData: leaderBoardData,
					personalBest: personalBest,
				},
			}
		);
		const levelButton = screen.getByTestId("level-1");
		await user.click(levelButton);
		const board = screen.getByTestId("board");
		expect(board).toBeInTheDocument();
	});

	it("should render the leaderboard when clicking view leaderboard", async () => {
		customRender(
			<Wrapper />,
			{providerProps: {
				level: 1,
				objective: {
					Waldo: false,
					Odlaw: false,
					Wizard: false,
				},
				viewLeader: false,
				playing: false,
				hideButton: false,
				text: "Start",
				isLoading: false,
				coordinatesData: coordinatesData,
				leaderBoardData: leaderBoardData,
				personalBest: personalBest,
			}}
		);
		const leaderboard = screen.getByText(/view leaderboard/i);
		await user.click(leaderboard);
		const personalBestHeader = screen.getByText(/personal best/i);
		expect(personalBestHeader).toBeInTheDocument();
	});

	it("should render the 'View leaderboard' button when clicking the levelButton", async () => {
		customRender(
			<Wrapper />,
			{
				providerProps: {
					level: null,
					objective: {
						Waldo: false,
						Odlaw: false,
						Wizard: false,
					},
					isLoading: false,
					coordinatesData: coordinatesData,
					leaderBoardData: leaderBoardData,
					personalBest: personalBest,
				},
			}
		);
		const levelButton = screen.getByTestId("level-1");
		await user.click(levelButton);
		const leaderboard = screen.getByText(/view leaderboard/i);
		expect(leaderboard).toBeInTheDocument();
	});
});
