import { Container } from "@/ui";
import Image from "next/image";
import { Industry, Time, Focus } from "@/assets/svgs";
import classes from "./Empowering.module.css";

const Empowering = () => {
  return (
    <section className={classes["empowering-section"]}>
      <Container>
        <div className={classes["empowering-section__header"]}>
          <h2>Empowering Meaning Connections</h2>
          <p>
            Discover the benefits of joining a platform that connects global
            talent, streamlines collaboration, and drives innovation in food
            product development.
          </p>
        </div>

        <div className={classes["features"]}>
          <div className={classes["expert-matching"]}>
            <div className={classes["description-box"]}>
              <p>Expert Matching</p>
              <p>
                Advanced tools ensure businesses find the right experts and
                experts discover the best projects, making partnerships
                effortless.
              </p>
            </div>
          </div>
          <div className={classes["sub-feature"]}>
            <div className={classes["industry"]}>
              <Image
                src={Industry}
                alt="building icon"
                width={170}
                height={142}
                priority
              />

              <div>
                <p>Wide Industry Coverage</p>
                <p>
                  Opportunities span pet food, plant-based products,
                  supplements, gourmet foods, and more, catering to a variety of
                  niches.
                </p>
              </div>
            </div>

            <div className={classes["focus"]}>
              <Image
                src={Focus}
                alt="Calendar icon"
                width={170}
                height={142}
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
          </div>
          <div className={classes["time-cost"]}>
            <div className={classes["description-box"]}>
              <p>Time and Cost Efficiency</p>
              <p>
                Save time and resources by connecting directly with the right
                people and tools, ensuring faster project outcomes.
              </p>
            </div>

            {/* <Image
              src={Time}
              alt="tree icon"
              width={990}
              height={782}
              priority
              className={classes["tree-icon"]}
            /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Empowering;
