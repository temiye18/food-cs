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
        <Fade direction="up" duration={600} triggerOnce>
          <div className={classes["world-connect__header"]}>
            <h2>Connecting the World Through AI-Enhanced Food Innovation</h2>
            <p>
              FoodCS uses advanced AI to connect global experts and businesses
              across all food sectors—from pet food to plant-based alternatives,
              health supplements to gourmet products, and sustainable foods. Our
              intelligent matching system enables seamless collaboration, no
              matter where you are.
            </p>
            <Button onClick={handleOpenModal}>Join waitlist</Button>
          </div>
        </Fade>

        <div className={classes["food-category"]}>
          <Image
            src={FoodCategory}
            alt="food categories"
            width={747}
            height={194.68}
            priority
            className={classes["desktop"]}
          />

          <Image
            src={FoodCategoryMobile}
            alt="food categories"
            width={348.45}
            height={292}
            priority
            className={classes["mobile"]}
          />
        </div>

        <div className={classes["global-connection"]}>
          <div>
            <div className={classes["global-connection__text"]}>
              <Fade direction="up" duration={600} triggerOnce>
                <h3>Global Connections, AI-OptimiSed Solutions</h3>
                <p>
                  Whether you're crafting the perfect probiotic snack or
                  developing the next big vegan delight, our AI-powered platform
                  brings together diverse talents and industries worldwide to
                  transform ideas into reality.
                </p>
              </Fade>
            </div>
            <Fade direction="up" duration={600} triggerOnce>
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
