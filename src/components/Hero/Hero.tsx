import { Container, Button } from "@/ui";

import classes from "./Hero.module.css";

const Hero: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
  return (
    <section className={classes["hero-section"]}>
      <Container className={classes["hero-container"]}>
        <header className={classes["hero-header"]}>
          <h1>
            Food<span>CS</span>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How it works</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
            </ul>
          </nav>

          <Button onClick={handleOpenModal} className={classes["header-btn"]}>
            Join waitlist
          </Button>
        </header>

        <div className={classes["hero-content"]}>
          <p className={classes["hero-tag"]}>
            Be the first to know when we launch
          </p>
          <h1>
            Connecting experts and businesses to <span>transform food.</span>
          </h1>
          <p className={classes["hero-action"]}>
            Join our waitlist. Be part of the future of culinary innovation and
            get exclusive early access to our community.
          </p>

          <Button onClick={handleOpenModal} className={classes["hero-btn"]}>
            Join waitlist
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
