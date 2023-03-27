import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../../test/test-util";
import userEvent from "@testing-library/user-event";
import PickerButton from "./PickerButton";

it("should say 'Waldo", () => {
	customRender(
		<PickerButton
			char="Waldo"
			clickPos={{ x: 0, y: 0 }}
			setView={vi.fn()}
			coordinate={[0, 0]}
		/>,
		{ providerProps: {} }
	);
	const button = screen.getByRole("button");
	expect(button).toHaveTextContent("Waldo");
});

it("should have class 'animate-correct' if clicking on correct character", async () => {
	customRender(
		<PickerButton
			char="Waldo"
			clickPos={{ x: 0, y: 0 }}
			setView={vi.fn()}
			coordinate={[0, 0]}
		/>,
		{ providerProps: {} }
	);
	const button = screen.getByRole("button");
	await userEvent.click(button);
	expect(button).toHaveClass("animate-correct");
});

it("should have class 'animate-incorrect' if clicking on incorrect character", async () => {
	customRender(
		<PickerButton
			char="Waldo"
			clickPos={{ x: 0, y: 0 }}
			setView={vi.fn()}
			coordinate={[0, 110]}
		/>,
		{ providerProps: {} }
	);
	const button = screen.getByRole("button");
	await userEvent.click(button);
	expect(button).toHaveClass("animate-incorrect");
});
