import { Container } from "@/ui";
import Image from "next/image";
import { Google, LinkedIn } from "@/assets/svgs";
import classes from "./FooterNav.module.css";

const FooterNav = () => {
  return (
    <section className={classes["footer-nav"]}>
      <Container>
        <header className={classes["footer-header"]}>
          <h1>
            Food<span>CS</span>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="https://www.google.com/" target="blank_">
                  <Image
                    src={Google}
                    alt="google logo"
                    width={40}
                    height={40}
                    priority
                  />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com" target="blank_">
                  <Image
                    src={LinkedIn}
                    alt="google logo"
                    width={40}
                    height={40}
                    priority
                  />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Container>
    </section>
  );
};

export default FooterNav;
