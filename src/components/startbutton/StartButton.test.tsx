import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../test/test-util";
import userEvent from "@testing-library/user-event";
import Board from "../board/Board";
import { coordinatesData } from "../../test/test-util";

it("should say 'Start'", () => {
	customRender(<Board />, {
		providerProps: {
			objective: {
				Waldo: false,
				Odlaw: false,
				Wizard: false,
			},
			level: 1,
			hideButton: false,
			playing: false,
			coordinatesData: coordinatesData,
			text: "Start",
		},
	});
	const button = screen.getByTestId("start-button");
	expect(button).toHaveTextContent("Start");
});

it("should say '3' after clicking start", async () => {
	customRender(<Board />, {
		providerProps: {
			objective: {
				Waldo: false,
				Odlaw: false,
				Wizard: false,
			},
			level: 1,
			hideButton: false,
			playing: false,
			coordinatesData: coordinatesData,
			text: "Start",
		},
	});
	const button = screen.getByTestId("start-button");
	await userEvent.click(button);
	expect(button).toHaveTextContent("3");
});
