import React from "react";
import { Loading } from "@/assets/svgs";
import Image from "next/image";
import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  className,
  type,
  disabled = false,
  children,
  loading = false,
  onClick,
}) => {
  return (
    <button
      className={`${classes.btn} ${className} ${
        loading ? classes.loading : ""
      }`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <Image
          src={Loading}
          alt="loading icon"
          width={20}
          height={20}
          priority
        />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
