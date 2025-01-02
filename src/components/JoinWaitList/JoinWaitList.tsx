"use client";
import { useEffect, useState } from "react";
import { Button, Container } from "@/ui";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { baseUrl } from "@/constants";
import classes from "./JoinWaitList.module.css";

interface Records {
  id: string;
  createdTime: string;
  fields: {
    "Full Name": string;
    Category: string;
    Email: string;
    "Store Info For Marketing": boolean;
  };
}
interface ResponseData {
  records: Records[];
}

const JoinWaitList: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
  const [registeredCount, setRegisteredCount] = useState<number>(0);

  async function fetchRecords() {
    try {
      const response = await fetch(baseUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorMessage =
          "😢 Something went wrong! Please report to info@foodcs.co.uk";
        throw new Error(errorMessage);
      }
      const data = (await response.json()) as ResponseData;

      setRegisteredCount(data.records.length);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log("error Occurred");
      }
    }
  }

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <section className={classes["join-waitlist"]}>
      <Container>
        <div className={classes.content}>
          <Fade
            cascade
            direction="up"
            damping={0.6}
            duration={1000}
            triggerOnce
          >
            <h2>
              Be part of the FoodCS community from the start. Join the waitlist
              today and stay updated on our launch!
            </h2>
            <h2 className={classes.metrics}>
              <span>
                <CountUp start={0} end={registeredCount} duration={1.5} />
              </span>{" "}
              {registeredCount > 1 ? "people" : "person"} joined Already.
            </h2>
            <div className={classes["join-btn"]}>
              <Button onClick={handleOpenModal}>Join waitlist</Button>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default JoinWaitList;
