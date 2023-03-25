import React from "react";
import { act, screen } from "@testing-library/react";
import { customRender, data, objective } from "../../test/test-util";
import Board from "./Board";

it("should not show Picker modal on render", () => {
  customRender(
    <Board
      data={data}
      level={1}
      setLevel={() => null}
      objective={objective}
      setObjective={() => null}
      time={1}
      playing={false}
      setPlaying={() => null}
      hideButton={false}
      setHideButton={() => null}
      text={"Start"}
      setText={() => null}
      setViewLeader={() => null}
    />);
  const picker = screen.getByTestId("picker");
  expect(picker).not.toBeVisible();
});

it("should open the Picker modal when image is clicked", () => {
  customRender(
    <Board
      data={data}
      level={1}
      setLevel={() => null}
      objective={objective}
      setObjective={() => null}
      time={1}
      playing={false}
      setPlaying={() => null}
      hideButton={false}
      setHideButton={() => null}
      text={"Start"}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const image = screen.getByRole("img");
  const picker = screen.getByTestId("picker");
  act(() => {
    image.click();
  });
  expect(picker).toBeVisible();
});

it("should close the Picker modal when image is clicked again", () => {
  customRender(
    <Board
      data={data}
      level={1}
      setLevel={() => null}
      objective={objective}
      setObjective={() => null}
      time={1}
      playing={false}
      setPlaying={() => null}
      hideButton={false}
      setHideButton={() => null}
      text={"Start"}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const image = screen.getByRole("img");
  const picker = screen.getByTestId("picker");
  act(() => {
    image.click();
  });
  act(() => {
    image.click();
  });
  expect(picker).not.toBeVisible();
});

it("should have start visible on render", () => {
  customRender(
    <Board
      data={data}
      level={1}
      setLevel={() => null}
      objective={objective}
      setObjective={() => null}
      time={1}
      playing={false}
      setPlaying={() => null}
      hideButton={false}
      setHideButton={() => null}
      text={"Start"}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const start = screen.getByTestId("start-button");
  expect(start).toBeVisible();
});

it("should disable start button on click", () => {
  customRender(
    <Board
      data={data}
      level={1}
      setLevel={() => null}
      objective={objective}
      setObjective={() => null}
      time={1}
      playing={false}
      setPlaying={() => null}
      hideButton={false}
      setHideButton={() => null}
      text={"Start"}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const start = screen.getByTestId("start-button");
  act(() => {
    start.click();
  });
  expect(start).toBeDisabled();
});