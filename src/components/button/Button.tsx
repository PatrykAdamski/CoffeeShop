import React from "react";

interface buttonProps {
  size: string;
  textInside: string;
  color?: string;
}

export const Button: React.FC<buttonProps> = ({ size, color, textInside }) => {
  return (
    <button className={`btn btn--${size} btn--${color}`}>{textInside}</button>
  );
};
