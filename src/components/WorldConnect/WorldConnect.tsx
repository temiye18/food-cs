import { Container, Button } from "@/ui";
import Image from "next/image";
import classes from "./WorldConnect.module.css";
import { FoodCategory, FoodCategoryMobile } from "@/assets/svgs";

const WorldConnect = () => {
  return (
    <section className={classes["world-connect-section"]}>
      <Container>
        <div className={classes["world-connect__header"]}>
          <h2>Connecting the World Through Food Innovation</h2>
          <p>
            FoodCS connects global experts and businesses across all food
            sectors—whether it’s pet food, plant-based alternatives, health
            supplements, gourmet products, or sustainable foods. Collaborate and
            innovate, no matter where you are.
          </p>
          <Button>Join waitlist</Button>
        </div>

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
              <h3>Global Connections, Universal Flavors</h3>
              <p>
                Whether it’s crafting the perfect probiotic snack or the next
                big vegan delight, our platform brings together diverse talents
                and industries from across the globe to transform ideas into
                reality.
              </p>
            </div>

            <Button className={classes["join-btn"]}>Join waitlist</Button>
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
