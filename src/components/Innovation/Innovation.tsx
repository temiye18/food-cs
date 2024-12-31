import { Container } from "@/ui";
import classes from "./Innovation.module.css";

const Innovation = () => {
  return (
    <section className={classes["innovation-section"]}>
      <Container>
        <div className={classes["innovation-section__content"]}>
          <h1>Where Innovation Meets Community</h1>
          <p>
            FoodCS is where food product development experts and businesses
            collaborate to create groundbreaking solutions. Our platform bridges
            the gap between creativity and industry needs, driving innovation
            while fostering meaningful professional connections.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Innovation;
