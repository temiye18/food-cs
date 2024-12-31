"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { User, Email, Briefcase, ChevronDown, Close } from "@/assets/svgs";
import { FaCheck } from "react-icons/fa";
import classes from "./JoinModal.module.css";
import Button from "../Button/Button";
interface JoinModalProps {
  handleCloseModal: () => void;
  handleOpenConfettiModal: () => void;
}
const JoinModal: React.FC<JoinModalProps> = ({
  handleCloseModal,
  handleOpenConfettiModal,
}) => {
  const [userAgreed, setUserAgreed] = useState<boolean>(false);

  const [category, setCategory] = useState<string>("");

  const parentRef = useRef<HTMLDivElement>(null); // Correct useRef initialization

  const handleClick = (category: string) => {
    setCategory(category);
    if (parentRef.current) {
      parentRef.current.blur(); // Ensure the parent loses focus
    }
  };

  const handleSubmit = () => {
    handleCloseModal();
    handleOpenConfettiModal();
  };

  return (
    <>
      <div className={classes.backdrop} onClick={handleCloseModal}></div>
      <div className={classes["modal-container"]}>
        <div className={classes.logo}>
          <p>
            Food<span>CS</span>
          </p>
        </div>

        <form className={classes.form}>
          <p className={classes.title}>Join waitlist</p>
          <div className={classes["input-box"]}>
            <div className={`${classes.name} ${classes.input}`}>
              <label htmlFor="name">Full name</label>
              <div>
                <input
                  type="name"
                  id="name"
                  placeholder="e.g. Brandt Maybury"
                  required
                />
                <Image
                  src={User}
                  width={20}
                  height={20}
                  alt="user icon"
                  priority
                />
              </div>
            </div>

            <div className={`${classes.email} ${classes.input}`}>
              <label htmlFor="email">Email address</label>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="e.g. brandtmaybury08@gmail.com"
                  required
                />
                <Image
                  src={Email}
                  width={20}
                  height={20}
                  alt="email icon"
                  priority
                />
              </div>
            </div>

            <div className={`${classes.category} ${classes.input}`}>
              <label htmlFor="category">Category</label>
              <div tabIndex={-1} ref={parentRef}>
                {!category && (
                  <p className={classes["label-text"]}>
                    Are you an expert or a business?
                  </p>
                )}

                {category && (
                  <p className={classes["active-text"]}>
                    {category === "expert"
                      ? "I am a Food Development Expert"
                      : " I am a business in search of an expert"}
                  </p>
                )}

                <Image
                  src={Briefcase}
                  width={20}
                  height={20}
                  alt="briefcase icon"
                  priority
                />
                <Image
                  src={ChevronDown}
                  width={20}
                  height={20}
                  alt="chevron-down icon"
                  priority
                  className={classes["chevron-down"]}
                />
                <div className={classes["category-options"]}>
                  <p
                    onClick={() => handleClick("expert")}
                    className={`${category === "expert" ? classes.active : ""}`}
                  >
                    I am a Food Development Expert
                  </p>
                  <p
                    onClick={() => handleClick("business")}
                    className={`${
                      category === "business" ? classes.active : ""
                    }`}
                  >
                    I am a business in search of an expert
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.agreement}>
            <button
              onClick={() => setUserAgreed((prev) => !prev)}
              type="button"
              className={userAgreed ? classes.active : ""}
            >
              {userAgreed && <FaCheck size={10} />}
            </button>
            <p>
              By clicking <span>"Join waitlist,"</span> I agree that the
              information provided would be stored for marketing purposes.
            </p>
          </div>

          <div className={classes["form-action"]}>
            <Button
              className={classes["form-action__btn"]}
              onClick={handleSubmit}
            >
              Join waitlist
            </Button>
            <p>We won’t spam you</p>
          </div>
        </form>

        <button onClick={handleCloseModal} className={classes["close-btn"]}>
          <Image src={Close} alt="close icon" width={32} height={32} priority />
        </button>
      </div>
    </>
  );
};

export default JoinModal;
