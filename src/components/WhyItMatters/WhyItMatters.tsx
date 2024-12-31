"use client";
import { Container } from "@/ui";
import { stories } from "@/constants";
import classes from "./WhyItMatters.module.css";
import Image from "next/image";

const WhyItMatters = () => {
  return (
    <section className={classes["why-section"]}>
      <Container>
        <h2>Why it matters?</h2>
        <p className={classes["why-paragraph"]}>
          Discover why through real stories and trends shaping the future of
          food innovation.
        </p>
        <div className={classes["slider-wrapper"]}>
          {stories.map((story) => {
            return (
              <div
                className={classes["slider-card"]}
                key={story.id}
                style={{ backgroundImage: `url(${story.backgroundImage})` }}
              >
                <div className={classes["slider-card__top"]}>
                  <div className={classes["slider-card__top-profile"]}>
                    <Image
                      src={story.profilePic}
                      alt="profile picture"
                      width={40}
                      height={40}
                    />
                    <div className={classes["slider-card__top-profile-text"]}>
                      <p>{story.name}</p>
                      <p>{story.username}</p>
                    </div>
                  </div>

                  <Image src={story.platformLogo} alt="tiktok logo" />
                </div>
                <div className={classes["slider-card__bottom"]}>
                  <p>#Hashtag1</p>
                  <Image
                    src={story.playIcon}
                    alt="video play icon"
                    width={56}
                    height={56}
                    priority
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyItMatters;
