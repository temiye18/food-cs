"use client";
import { useState } from "react";
import { Container, QuestionCard } from "@/ui";
import { faqs } from "@/constants";
import classes from "./Faq.module.css";

const Faq = () => {
  const [clickId, setClickId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setClickId((prev) => (prev === id ? null : id));
  };
  return (
    <section className={classes["faq-section"]} id="faqs">
      <Container>
        <div className={classes["faq-section__container"]}>
          <div className={classes["faq-section__title"]}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className={classes["faq-section__questions"]}>
            {faqs.map((faq) => {
              return (
                <QuestionCard
                  key={faq.id}
                  faq={faq}
                  onToggle={() => handleClick(faq.id)}
                  isActive={clickId === faq.id}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
