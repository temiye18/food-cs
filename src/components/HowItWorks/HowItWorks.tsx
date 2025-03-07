import { Container } from "@/ui";
import Image from "next/image";
import { Slide, Fade } from "react-awesome-reveal";
import { StepOne, StepTwo, StepThree, CurveOne, CurveTwo } from "@/assets/svgs";
import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={classes["how-section"]} id="how-it-works">
      <Container>
        <div className={classes["how-section__header"]}>
          <Fade direction="up" duration={600} triggerOnce>
            <h2>How it works</h2>
            <p>
              FoodCS uses AI to simplify collaboration by seamlessly connecting
              food product experts with businesses. From joining the platform to
              finding the perfect match for your project, we make the process
              intuitive and efficient.
            </p>
          </Fade>
        </div>

        <div className={classes["steps-container"]}>
          <Image
            src={CurveOne}
            alt="number"
            width={244}
            height={40}
            priority
            className={classes["curve-1"]}
          />
          <Image
            src={CurveTwo}
            alt="number"
            width={244}
            height={40}
            priority
            className={classes["curve-2"]}
          />
          <Slide
            cascade
            direction="up"
            damping={0.4}
            delay={500}
            duration={700}
            triggerOnce
          >
            <div className={classes["steps-container__item"]}>
              <Image
                src={StepOne}
                alt="number"
                width={64}
                height={64}
                priority
              />
              <p>Create an account</p>
              <p>
                Sign up easily to join the FoodCS community and access a world
                of food product development opportunities.
              </p>
            </div>
            <div className={classes["steps-container__item"]}>
              <Image
                src={StepTwo}
                alt="number"
                width={64}
                height={64}
                priority
              />
              <p>Find your match</p>
              <p>
                Our AI-powered matching system connects you with the right
                experts or businesses based on your specific needs.
              </p>
            </div>
            <div className={classes["steps-container__item"]}>
              <Image
                src={StepThree}
                alt="number"
                width={64}
                height={64}
                priority
              />
              <p>Get your project executed</p>
              <p>
                Collaborate seamlessly to bring your food innovation to life
                with trusted partners.
              </p>
            </div>
          </Slide>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
