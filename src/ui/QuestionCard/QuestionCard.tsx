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

  const specialQuestion = "How is FoodCS helpful to me?";
  const specialAnswer =
    faq.question.toLowerCase() === specialQuestion.toLowerCase() ? (
      <>
        <p>
          <strong>Food Businesses:</strong> FoodCS provides the space for food
          startups, challenger brands or established brands to easily find and
          collaborate with experts in the food development field.
        </p>
        <p>
          <strong>Food Experts:</strong> FoodCS is the platform created for food
          experts to easily connect with a variety of food businesses on a
          project to project basis.
        </p>
      </>
    ) : (
      <p>{faq.answer}</p>
    );
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
        {specialAnswer}
      </div>
    </div>
  );
};

export default QuestionCard;
