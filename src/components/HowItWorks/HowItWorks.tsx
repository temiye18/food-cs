import { Container } from "@/ui";
import Image from "next/image";
import { StepOne, StepTwo, StepThree, CurveOne, CurveTwo } from "@/assets/svgs";
import classes from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={classes["how-section"]} id="how-it-works">
      <Container>
        <div className={classes["how-section__header"]}>
          <h2>How it works</h2>
          <p>
            FoodCS simplifies collaboration by seamlessly connecting food
            product experts with businesses. From joining the platform to
            finding the perfect match for your project, we make the process
            intuitive and efficient.
          </p>
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
          <div className={classes["steps-container__item"]}>
            <Image src={StepOne} alt="number" width={64} height={64} priority />
            <p>Create an account</p>
            <p>
              Sign up easily to join the FoodCS community and access a world of
              food product development opportunities.
            </p>
          </div>
          <div className={classes["steps-container__item"]}>
            <Image src={StepTwo} alt="number" width={64} height={64} priority />
            <p>Find your match</p>
            <p>
              Leverage our smart matching tools to connect with the right
              experts or businesses.
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
              Collaborate seamlessly to bring your food innovation to life with
              trusted partners.to connect with the right experts or businesses.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
