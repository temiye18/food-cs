"use client";
import { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import { User, Email, Briefcase, ChevronDown, Close } from "@/assets/svgs";
import { useBlockPointerEvents } from "@/hooks";
import { FaCheck } from "react-icons/fa";
import { baseUrl } from "@/constants";
import Button from "../Button/Button";
import classes from "./JoinModal.module.css";

interface JoinModalProps {
  showJoinModal: boolean;
  handleCloseModal: () => void;
  handleOpenConfettiModal: () => void;
}

interface FormData {
  name: string;
  email: string;
}
const JoinModal: React.FC<JoinModalProps> = ({
  showJoinModal,
  handleCloseModal,
  handleOpenConfettiModal,
}) => {
  useBlockPointerEvents(showJoinModal);
  const [userAgreed, setUserAgreed] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function isValidEmail(email: string) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const formIsValid =
    category && isValidEmail(formData.email) && formData.name.trim().length > 0;
  const buttonIsDisabled = isLoading || !formIsValid;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const parentRef = useRef<HTMLDivElement>(null); // Correct useRef initialization

  const handleClick = (category: string) => {
    setCategory(category);
    if (parentRef.current) {
      parentRef.current.blur(); // Ensure the parent loses focus
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const data = {
      records: [
        {
          fields: {
            "Full Name": formData.name,
            Email: formData.email,
            Category: category,
            "Store Info For Marketing": userAgreed,
          },
        },
      ],
    };

    try {
      setErrorMessage("");
      setIsLoading(true);
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorMessage =
          "😢 Something went wrong! Please report to info@foodcs.co.uk";
        throw new Error(errorMessage);
      }
      // console.log(response);

      setCategory("");
      setUserAgreed(false);
      setFormData({ name: "", email: "" });
      handleCloseModal();
      handleOpenConfettiModal();
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(
          "Ooppss!😢 an unexpected error occurred! Please report to info@foodcs.co.uk"
        );
      }
    } finally {
      setIsLoading(false);
    }
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

        <form className={classes.form} onSubmit={handleSubmit}>
          <p className={classes.title}>Join waitlist</p>
          <div className={classes["input-box"]}>
            <div className={`${classes.name} ${classes.input}`}>
              <label htmlFor="name">Full name</label>
              <div>
                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="e.g. Brandt Maybury"
                  onChange={handleChange}
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
                  name="email"
                  placeholder="e.g. brandtmaybury08@gmail.com"
                  onChange={handleChange}
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

          {errorMessage && <p className={classes.error}>{errorMessage}</p>}

          <div className={classes["form-action"]}>
            <Button
              className={classes["form-action__btn"]}
              disabled={buttonIsDisabled}
              loading={isLoading}
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
