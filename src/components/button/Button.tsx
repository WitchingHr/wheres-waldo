import React, { Fragment } from "react";

type ButtonProps = {
  name: number,
  level: number | null,
  handleClick: () => void
}

export default function Button({ name, level, handleClick }: ButtonProps): JSX.Element {
  return (
    <>
      {level !== name ? (
        <button onClick={handleClick} className="border px-2">
          {name}
        </button>
      ) : (
        <button onClick={handleClick} disabled className="border bg-slate-300 px-2">{name}</button>
      )}
    </>
  );
}

