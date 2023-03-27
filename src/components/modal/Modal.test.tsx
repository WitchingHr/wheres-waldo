import React from "react";
import { screen } from "@testing-library/react";
import Modal from "./Modal";
import { customRender } from "../../test/test-util";

it("should render the correct button text if level is not 3", () => {
	customRender(<Modal time={1} />, { providerProps: { level: 1 } });
	const button = screen.getByRole("button");
	expect(button).toHaveTextContent("Next Level");
});

it("should render the correct button text on level 3", () => {
	customRender(<Modal time={1} />, { providerProps: { level: 3 } });
	const button = screen.getByRole("button");
	expect(button).toHaveTextContent("View Leaderboard");
});

it("should render the correct time", () => {
	customRender(<Modal time={1.23} />, { providerProps: { level: 1 } });
	expect(screen.getByText("1.23s")).toBeInTheDocument();
});
