import React, { ReactNode } from 'react';

interface buttonProps {
  size: string;
  children: ReactNode;
  color?: string;
  onClick?: () => void;
}

export const Button: React.FC<buttonProps> = ({
  size,
  color,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`btn btn--${size} btn--${color}`}
    >
      {children}
    </button>
  );
};
