import { Container, Button } from "@/ui";
import { Fade } from "react-awesome-reveal";
import { Logo } from "@/assets/svgs";
import Link from "next/link";
import classes from "./Hero.module.css";
import Image from "next/image";

const Hero: React.FC<{ handleOpenModal: () => void }> = ({
  handleOpenModal,
}) => {
  return (
    <section className={classes["hero-section"]}>
      <Container className={classes["hero-container"]}>
        <header className={classes["hero-header"]}>
          <Link href="/">
            <Image
              src={Logo}
              alt="foodcs logo"
              width={124.6}
              height={44}
              priority
            />
          </Link>
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
          <Fade direction="up" duration={600} triggerOnce>
            <p className={classes["hero-tag"]}>
              Be the first to know when we launch
            </p>
            <h1>
              <span className={classes.ai}>ai</span> - connecting expert and
              businesses to{" "}
              <span className={classes.transform}>transform food</span>
            </h1>
            <p className={classes["hero-action"]}>
              Join our waitlist. Be part of the future of AI-enhanced culinary
              innovation and get exclusive early access to our community.
            </p>

            <Button onClick={handleOpenModal} className={classes["hero-btn"]}>
              Join waitlist
            </Button>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
