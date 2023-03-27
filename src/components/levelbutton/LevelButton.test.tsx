import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../test/test-util";
import LevelButton from "./LevelButton";

it("should disable the button when level is equal to name", () => {
	customRender(<LevelButton name={1} />, { providerProps: { level: 1 } });
	const button = screen.getByRole("button");
	expect(button).toBeDisabled();
});

it("should enable the button when level is not equal to name", () => {
	customRender(<LevelButton name={1} />, { providerProps: { level: 2 } });
	const button = screen.getByRole("button");
	expect(button).not.toBeDisabled();
});
