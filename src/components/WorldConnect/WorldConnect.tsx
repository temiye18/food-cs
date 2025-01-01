import { Container, Button } from "@/ui";
import Image from "next/image";
import { FoodCategory, FoodCategoryMobile } from "@/assets/svgs";
import { Fade, Roll } from "react-awesome-reveal";
import classes from "./WorldConnect.module.css";

const WorldConnect: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
  return (
    <section className={classes["world-connect-section"]}>
      <Container>
        <Fade direction="down" duration={1000} triggerOnce>
          <div className={classes["world-connect__header"]}>
            <h2>Connecting the World Through Food Innovation</h2>
            <p>
              FoodCS connects global experts and businesses across all food
              sectors—whether it’s pet food, plant-based alternatives, health
              supplements, gourmet products, or sustainable foods. Collaborate
              and innovate, no matter where you are.
            </p>
            <Button onClick={handleOpenModal}>Join waitlist</Button>
          </div>
        </Fade>

        <div className={classes["food-category"]}>
          <Roll delay={1000} duration={1000} triggerOnce>
            <Image
              src={FoodCategory}
              alt="food categories"
              width={747}
              height={194.68}
              priority
              className={classes["desktop"]}
            />
          </Roll>

          <Roll delay={1000} duration={1000} triggerOnce>
            <Image
              src={FoodCategoryMobile}
              alt="food categories"
              width={348.45}
              height={292}
              priority
              className={classes["mobile"]}
            />
          </Roll>
        </div>

        <div className={classes["global-connection"]}>
          <div>
            <div className={classes["global-connection__text"]}>
              <Fade
                cascade
                direction="down"
                damping={0.6}
                delay={1100}
                duration={900}
                triggerOnce
              >
                <h3>Global Connections, Universal Flavors</h3>
                <p>
                  Whether it’s crafting the perfect probiotic snack or the next
                  big vegan delight, our platform brings together diverse
                  talents and industries from across the globe to transform
                  ideas into reality.
                </p>
              </Fade>
            </div>
            <Fade
              direction="down"
              damping={0.4}
              delay={1200}
              duration={900}
              triggerOnce
            >
              <Button onClick={handleOpenModal} className={classes["join-btn"]}>
                Join waitlist
              </Button>
            </Fade>
          </div>

          <Image
            src="/images/map.png"
            width={729}
            height={521.92}
            alt="world map"
            priority
            className={classes["map-desktop"]}
          />

          <Image
            src="/images/map_mobile.png"
            width={343}
            height={250.27}
            alt="world map"
            priority
            className={classes["map-mobile"]}
          />
        </div>
      </Container>
    </section>
  );
};

export default WorldConnect;
