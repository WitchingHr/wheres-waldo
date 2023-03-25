import React from "react";
import { render, screen } from "@testing-library/react";
import LevelButton from "./LevelButton";

it("should disable the button when level is equal to name", () => {
  render(
    <LevelButton
      name={1}
      level={1}
      setLevel={() => null}
      setObjective={() => null}
      setPlaying={() => null}
      setHideButton={() => null}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const button = screen.getByRole("button");
  expect(button).toBeDisabled();
});

it("should enable the button when level is not equal to name", () => {
  render(
    <LevelButton
      name={1}
      level={2}
      setLevel={() => null}
      setObjective={() => null}
      setPlaying={() => null}
      setHideButton={() => null}
      setText={() => null}
      setViewLeader={() => null}
    />
  );
  const button = screen.getByRole("button");
  expect(button).not.toBeDisabled();
});
