import React, { FC } from "react";

interface CharImageProps {
  src: string,
  char: boolean
}

const CharImage: FC<CharImageProps> = ({ src, char }) => {
  return (
    <img
      src={src} alt=""
      className={(char === false && "opacity-40 ") + "hover:opacity-100 cursor-pointer h-full"}
    />
  );
}

export default CharImage;