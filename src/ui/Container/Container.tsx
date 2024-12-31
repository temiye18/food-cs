import { FC } from "react";
import classes from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={`${classes.container} ${className}`}>{children}</div>;
};

export default Container;
