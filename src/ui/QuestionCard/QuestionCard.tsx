"use client";
import { useRef } from "react";
import { IoAddOutline } from "react-icons/io5";
import { LuMinus } from "react-icons/lu";
import { type Faq } from "@/interfaces/i-faq";
import classes from "./QuestionCard.module.css";

interface QuestionCardProps {
  faq: Faq;
  onToggle: () => void;
  isActive: boolean;
}
const QuestionCard: React.FC<QuestionCardProps> = ({
  faq,
  onToggle,
  isActive,
}) => {
  const answerRef = useRef<HTMLDivElement>(null);
  return (
    <div className={classes.card} onClick={onToggle}>
      <div className={classes.question}>
        <p>{faq.question}</p>
        <button>{isActive ? <LuMinus /> : <IoAddOutline />}</button>
      </div>

      <div
        className={`${classes.answer} ${isActive ? classes.active : ""}`}
        ref={answerRef}
        style={isActive ? { height: answerRef.current!.scrollHeight } : {}}
      >
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
