import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className={`${classes.btn} ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
