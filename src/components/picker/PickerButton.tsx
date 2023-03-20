import React, { FC } from "react";

interface PickerButtonProps {
  src: string,
  char: string
}

const PickerButton: FC<PickerButtonProps> = ({ src, char }) => {
  return (
    <li>
      <button className="flex items-center">
        <img src={src} alt={char} />
        <span>{char}</span>
      </button>
    </li>
  );
}

export default PickerButton;