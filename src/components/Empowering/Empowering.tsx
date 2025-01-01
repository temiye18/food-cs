import { Container } from "@/ui";
import Image from "next/image";
import { Industry, Time, Focus, ExpertMatching } from "@/assets/svgs";
import { Fade } from "react-awesome-reveal";
import classes from "./Empowering.module.css";

const Empowering = () => {
  return (
    <section className={classes["empowering-section"]} id="features">
      <Container>
        <div className={classes["empowering-section__header"]}>
          <Fade
            cascade
            direction="down"
            damping={0.6}
            delay={500}
            duration={1000}
            triggerOnce
          >
            <h2>Empowering Meaning Connections</h2>
            <p>
              Discover the benefits of joining a platform that connects global
              talent, streamlines collaboration, and drives innovation in food
              product development.
            </p>
          </Fade>
        </div>

        <div className={classes["features"]}>
          <Fade
            cascade
            direction="left"
            damping={0.4}
            delay={1000}
            duration={1000}
            triggerOnce
          >
            <div className={classes["expert-matching"]}>
              <div className={classes["description-box"]}>
                <p>Expert Matching</p>
                <p>
                  Advanced tools ensure businesses find the right experts and
                  experts discover the best projects, making partnerships
                  effortless.
                </p>
              </div>

              <Image
                src={ExpertMatching}
                alt="people"
                width={414}
                height={464}
                priority
                className={classes["tree-icon"]}
              />
            </div>

            <div className={classes["sub-feature"]}>
              <div className={classes["industry"]}>
                <Image
                  src={Industry}
                  alt="building icon"
                  width={414}
                  height={154}
                  priority
                />

                <div>
                  <p>Wide Industry Coverage</p>
                  <p>
                    Opportunities span pet food, plant-based products,
                    supplements, gourmet foods, and more, catering to a variety
                    of niches.
                  </p>
                </div>
              </div>

              <Fade
                cascade
                direction="left"
                damping={0.4}
                delay={1000}
                duration={1000}
                triggerOnce
              >
                <div className={classes["focus"]}>
                  <Image
                    src={Focus}
                    alt="Calendar icon"
                    width={202}
                    height={151}
                    priority
                  />
                  <div>
                    <p>Sustainability Focus</p>
                    <p>
                      Support eco-friendly and socially responsible practices in
                      food development, contributing to a sustainable future.
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
            <div className={classes["time-cost"]}>
              <div className={classes["description-box"]}>
                <p>Time and Cost Efficiency</p>
                <p>
                  Save time and resources by connecting directly with the right
                  people and tools, ensuring faster project outcomes.
                </p>
              </div>

              <Image
                src={Time}
                alt="tree icon"
                width={335}
                height={314}
                priority
                className={classes["tree-icon"]}
              />
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Empowering;
