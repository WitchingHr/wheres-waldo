import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

const setSignedIn = vi.fn();

it("should say sign in if user is not signed in", () => {
  render(<Header signedIn={false} setSignedIn={setSignedIn} />);
  expect(screen.getByText(/sign in/i)).toBeInTheDocument();
});

it("should say sign out if user is signed in", () => {
  render(<Header signedIn={true} setSignedIn={setSignedIn} />);
  expect(screen.getByText(/sign out/i)).toBeInTheDocument();
});

it("should say signed in as if user is signed in", () => {
  render(<Header signedIn={true} setSignedIn={setSignedIn} />);
  expect(screen.getByText(/signed in as/i)).toBeInTheDocument();
});

it("should not say signed in as if user is not signed in", () => {
  render(<Header signedIn={false} setSignedIn={setSignedIn} />);
  expect(screen.queryByText(/signed in as/i)).not.toBeInTheDocument();
});
