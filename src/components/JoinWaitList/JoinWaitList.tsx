import { Button, Container } from "@/ui";
import { Fade } from "react-awesome-reveal";
import classes from "./JoinWaitList.module.css";

const JoinWaitList: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
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
            <h2 className={classes.metrics}>230 people joined Already.</h2>
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
