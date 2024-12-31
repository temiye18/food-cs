"use client";
import { useState } from "react";
import Image from "next/image";
import { User, Email, Briefcase, ChevronDown, Check } from "@/assets/svgs";
import { FaCheck } from "react-icons/fa";
import classes from "./JoinModal.module.css";
import Button from "../Button/Button";

const JoinModal: React.FC<{ handleCloseModal: () => void }> = ({
  handleCloseModal,
}) => {
  const [userAgreed, setUserAgreed] = useState<boolean>(false);
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
              <div>
                <p className={classes["default-text"]}>
                  Are you an expert or a business?
                </p>
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
            <Button className={classes["form-action__btn"]}>
              Join waitlist
            </Button>
            <p>We won’t spam you</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default JoinModal;
