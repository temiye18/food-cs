import { Container } from "@/ui";
import { Fade } from "react-awesome-reveal";
import classes from "./Innovation.module.css";

const Innovation = () => {
  return (
    <section className={classes["innovation-section"]} id="about">
      <Container>
        <div className={classes["innovation-section__content"]}>
          <Fade direction="top-left" duration={1000} delay={600} triggerOnce>
            <h1>Where Innovation Meets Community</h1>
          </Fade>
          <Fade direction="right" duration={1000} delay={600} triggerOnce>
            <p>
              FoodCS is where food product development experts and businesses
              collaborate to create groundbreaking solutions. Our platform
              bridges the gap between creativity and industry needs, driving
              innovation while fostering meaningful professional connections.
            </p>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Innovation;
