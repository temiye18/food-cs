"use client";
import { useState } from "react";
import { Container, QuestionCard } from "@/ui";
import { faqs } from "@/constants";
import { Fade } from "react-awesome-reveal";
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
            <Fade direction="up" duration={600} triggerOnce>
              <h2>Frequently Asked Questions</h2>
            </Fade>
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
