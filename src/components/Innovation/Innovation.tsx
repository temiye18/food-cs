import { Container } from "@/ui";
import { Fade } from "react-awesome-reveal";
import classes from "./Innovation.module.css";

const Innovation = () => {
  return (
    <section className={classes["innovation-section"]} id="about">
      <Container>
        <div className={classes["innovation-section__content"]}>
          <Fade direction="up" duration={600} triggerOnce>
            <h1>Where AI-Driven Innovation Meets Community</h1>
            <p>
              FoodCS combines AI-driven matching with human expertise to create
              groundbreaking solutions in food product development. Our platform
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
